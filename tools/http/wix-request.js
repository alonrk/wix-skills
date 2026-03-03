#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const { resolveAuthContext } = require("./wix-auth");

function parseArgs(argv) {
  const out = {
    operation: null,
    params: {},
    body: undefined,
    dryRun: false,
    timeoutMs: 30000,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--operation" && argv[i + 1]) {
      out.operation = argv[i + 1];
      i += 1;
      continue;
    }
    if (arg === "--params" && argv[i + 1]) {
      out.params = JSON.parse(argv[i + 1]);
      i += 1;
      continue;
    }
    if (arg === "--body" && argv[i + 1]) {
      out.body = JSON.parse(argv[i + 1]);
      i += 1;
      continue;
    }
    if (arg === "--timeout-ms" && argv[i + 1]) {
      out.timeoutMs = Number(argv[i + 1]);
      i += 1;
      continue;
    }
    if (arg === "--dry-run") {
      out.dryRun = true;
      continue;
    }
  }

  return out;
}

function loadOperationFiles() {
  const operationsDir = path.resolve(__dirname, "operations");
  if (!fs.existsSync(operationsDir)) {
    throw new Error(`Operations directory not found: ${operationsDir}`);
  }

  const files = fs
    .readdirSync(operationsDir)
    .filter((file) => file.endsWith(".json"))
    .map((file) => path.join(operationsDir, file));

  const operationMap = new Map();
  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, "utf8");
    const parsed = JSON.parse(raw);
    const items = Array.isArray(parsed.operations) ? parsed.operations : [];
    for (const item of items) {
      if (!item.id) {
        continue;
      }
      operationMap.set(item.id, item);
    }
  }
  return operationMap;
}

function interpolate(template, params) {
  return template.replace(/\{([a-zA-Z0-9_]+)\}/g, (match, key) => {
    if (params[key] === undefined || params[key] === null) {
      throw new Error(`Missing required path/query parameter: ${key}`);
    }
    return encodeURIComponent(String(params[key]));
  });
}

function validateRequiredParams(operation, params) {
  const requiredParams = Array.isArray(operation.requiredParams) ? operation.requiredParams : [];
  const missing = requiredParams.filter((key) => params[key] === undefined || params[key] === null);
  if (missing.length > 0) {
    throw new Error(`Missing required params: ${missing.join(", ")}`);
  }
}

function validateBody(operation, body) {
  if (!operation.bodyRequired) {
    return;
  }
  if (!body || typeof body !== "object") {
    throw new Error("Request body is required for this operation.");
  }
}

function buildRequest(operation, params, body, authContext) {
  validateRequiredParams(operation, params);
  validateBody(operation, body);

  const method = (operation.method || "GET").toUpperCase();
  const url = interpolate(operation.urlTemplate, params);

  const headers = {
    "content-type": "application/json",
    ...authContext.headers,
  };

  const init = {
    method,
    headers,
  };

  if (body !== undefined && method !== "GET") {
    init.body = JSON.stringify(body);
  }

  return {
    method,
    url,
    headers,
    body: init.body ? JSON.parse(init.body) : undefined,
    init,
  };
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.operation) {
    throw new Error("Missing --operation <operation-id>.");
  }

  const operations = loadOperationFiles();
  const operation = operations.get(args.operation);
  if (!operation) {
    throw new Error(`Unknown operation: ${args.operation}`);
  }

  const allowedModes = Array.isArray(operation.authModes) ? operation.authModes : undefined;
  const authContext = resolveAuthContext({ allowedModes });
  if (!authContext.mode) {
    throw new Error(
      `No usable auth context for operation '${args.operation}'. Allowed modes: ${(allowedModes || []).join(", ")}`
    );
  }

  const request = buildRequest(operation, args.params, args.body, authContext);
  const outputBase = {
    operation: args.operation,
    authMode: authContext.mode,
    sourceDocUrl: operation.sourceDocUrl || null,
    request: {
      method: request.method,
      url: request.url,
      headers: request.headers,
      body: request.body,
    },
  };

  if (args.dryRun) {
    process.stdout.write(
      `${JSON.stringify({ dryRun: true, ...outputBase }, null, 2)}\n`
    );
    return;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), args.timeoutMs);

  let response;
  let text;
  try {
    response = await fetch(request.url, { ...request.init, signal: controller.signal });
    text = await response.text();
  } finally {
    clearTimeout(timeout);
  }

  let parsed;
  try {
    parsed = text ? JSON.parse(text) : null;
  } catch (_err) {
    parsed = text;
  }

  process.stdout.write(
    `${JSON.stringify(
      {
        dryRun: false,
        ...outputBase,
        response: {
          status: response.status,
          ok: response.ok,
          body: parsed,
        },
      },
      null,
      2
    )}\n`
  );

  if (!response.ok) {
    process.exitCode = 1;
  }
}

run().catch((error) => {
  process.stdout.write(
    `${JSON.stringify(
      {
        error: error && error.message ? error.message : String(error),
      },
      null,
      2
    )}\n`
  );
  process.exitCode = 1;
});
