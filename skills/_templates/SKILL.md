---
name: example-skill-name
description: Describe what this Wix skill does and when to use it.
---

# Skill Name

## Use This Skill When

- The user asks for:
  - <trigger 1>
  - <trigger 2>
- This domain is the best fit: <domain>

## Required Context

- `siteId` or a clear way to resolve the target site.
- Any required entity identifiers (for example product ID, collection ID, service ID).
- Confirmation of desired operation (create, update, query, delete).

## Execution Flow

1. Discover the main API method in Wix REST API reference.
2. Confirm method endpoint and request schema from method docs.
3. Add or select operation id in `tools/http/operations/`.
4. Execute with `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`.

## Guardrails

- Never guess API URL or request body schema.
- Do not use docs page URLs as API URLs.
- Handle missing app/Wix Code errors by installing/enabling as indicated by error.

## Common Errors and Handling

- Missing app installed:
  - Install relevant Wix app and retry.
- `WDE0110: Wix Code not enabled`:
  - Enable/install Wix Code and retry.
- Permissions/auth errors:
  - Return actionable remediation and stop retry loops.

## Sources

- Method docs URL(s): <url>
