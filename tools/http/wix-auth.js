#!/usr/bin/env node

"use strict";

function readEnv(name) {
  const value = process.env[name];
  if (!value) {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function withBearer(token) {
  if (!token) {
    return token;
  }
  if (/^bearer\s+/i.test(token)) {
    return token;
  }
  return `Bearer ${token}`;
}

function withApiKeyPrefix(token) {
  if (!token) {
    return token;
  }
  if (/^apikey\s+/i.test(token)) {
    return token;
  }
  return `apiKey ${token}`;
}

function normalizeAllowedModes(allowedModes) {
  if (!Array.isArray(allowedModes) || allowedModes.length === 0) {
    return ["signed_instance", "oauth", "api_key"];
  }
  return allowedModes;
}

function buildBaseHeaders() {
  const headers = {};
  const accountId = readEnv("WIX_ACCOUNT_ID");
  const siteId = readEnv("WIX_SITE_ID");

  if (accountId) {
    headers["wix-account-id"] = accountId;
  }
  if (siteId) {
    headers["wix-site-id"] = siteId;
  }

  return headers;
}

function resolveAuthContext(options = {}) {
  const allowedModes = normalizeAllowedModes(options.allowedModes);
  const baseHeaders = buildBaseHeaders();

  const signedInstance = readEnv("WIX_SIGNED_INSTANCE") || readEnv("WIX_INSTANCE");
  if (allowedModes.includes("signed_instance") && signedInstance) {
    return {
      mode: "signed_instance",
      headers: {
        ...baseHeaders,
        authorization: signedInstance,
        "x-wix-signed-instance": signedInstance,
      },
      debug: {
        source: readEnv("WIX_SIGNED_INSTANCE") ? "WIX_SIGNED_INSTANCE" : "WIX_INSTANCE",
      },
    };
  }

  const oauthToken = readEnv("WIX_OAUTH_ACCESS_TOKEN") || readEnv("WIX_ACCESS_TOKEN");
  if (allowedModes.includes("oauth") && oauthToken) {
    return {
      mode: "oauth",
      headers: {
        ...baseHeaders,
        authorization: withBearer(oauthToken),
      },
      debug: {
        source: readEnv("WIX_OAUTH_ACCESS_TOKEN") ? "WIX_OAUTH_ACCESS_TOKEN" : "WIX_ACCESS_TOKEN",
      },
    };
  }

  const apiKey = readEnv("WIX_API_KEY");
  if (allowedModes.includes("api_key") && apiKey) {
    return {
      mode: "api_key",
      headers: {
        ...baseHeaders,
        authorization: withApiKeyPrefix(apiKey),
      },
      debug: {
        source: "WIX_API_KEY",
      },
    };
  }

  return {
    mode: null,
    headers: {
      ...baseHeaders,
    },
    debug: {
      source: null,
    },
  };
}

function cli() {
  const allowed = process.argv
    .slice(2)
    .filter((arg) => arg.startsWith("--allow="))
    .map((arg) => arg.replace("--allow=", "").trim())
    .filter(Boolean);

  const context = resolveAuthContext({ allowedModes: allowed });
  process.stdout.write(`${JSON.stringify(context, null, 2)}\n`);
  if (!context.mode) {
    process.exitCode = 1;
  }
}

if (require.main === module) {
  cli();
}

module.exports = {
  resolveAuthContext,
};
