---
name: wix-site-api-management
description: Manages site-scoped Wix APIs such as contributor queries and site-level property snapshots. Use when requests target site-level operational APIs and permissions.
---

# Wix Site API Management

## Use This Skill When

- The request is explicitly site-scoped.
- The action involves site contributors or site-level API surfaces.
- You need site-level operations outside product-vertical CRUD.

## Primary Flow

1. Open `tools/integrations/wix-site-api.md`.
2. Choose and execute the relevant operation id.
3. Use `tools/http/wix-request.js` for execution.
4. Add missing operations to:
   - `tools/http/operations/wix-site-api.json`

## Integration Playbook

- `tools/integrations/wix-site-api.md`

## Guardrails

- Confirm target site context before running calls.
- Distinguish site-level operations from account-level variants.
- Keep contributor and access-control operations explicit and auditable.
