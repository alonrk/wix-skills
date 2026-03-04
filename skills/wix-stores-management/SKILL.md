---
name: wix-stores-management
description: Manages Wix Stores catalog entities such as products, options, variants, and categories. Use when users need setup, query, creation, or updates for store inventory and catalog data.
---

# Wix Stores Management

## Use This Skill When

- The user needs product or catalog setup.
- The request involves product options, variants, categories, inventory, or pre-order settings.
- The user asks to add missing store pages (cart/checkout) or run bulk product operations.

## Primary Flow

1. Open `tools/integrations/wix-stores.md`.
2. Select operation id for the requested stores action.
3. Execute with:
   - `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`
4. Add missing operation coverage to:
   - `tools/http/operations/wix-stores.json`

## Integration Playbook

- `tools/integrations/wix-stores.md`

## Guardrails

- Never mix Catalog V1 and V3 request assumptions.
- Respect revision/version controls for update operations.
- Never invent variant or option payload structure.

## Error Handling

- Stores app missing:
  - Install app and retry.
- Validation failures in bulk operations:
  - Report partial failures explicitly and continue with successful items when appropriate.
