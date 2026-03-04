---
name: wix-cms-management
description: Manages Wix CMS collections, schema, references, and data item CRUD operations. Use when users need to create or modify CMS structure or content programmatically.
---

# Wix CMS Management

## Use This Skill When

- The user requests CMS collection schema creation or field updates.
- The task involves inserting, querying, updating, deleting, or bulk-processing CMS data items.
- The request includes single/multi-reference relationship management.

## Primary Flow

1. Open `tools/integrations/wix-cms.md`.
2. Select operation id for the requested CMS action.
3. Execute with:
   - `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`
4. Add missing operation coverage to:
   - `tools/http/operations/wix-cms.json`

## Integration Playbook

- `tools/integrations/wix-cms.md`

## Guardrails

- Do not treat multi-reference fields as regular scalar fields in item CRUD payloads.
- Preserve collection and field identifiers exactly; avoid ad hoc renaming.
- Use filter-based bulk operations carefully and explicitly scope destructive actions.

## Error Handling

- Permission/scope errors on schema operations:
  - Return required scope and halt destructive retries.
- Reference operation mismatch:
  - Switch to dedicated reference endpoints from Wix REST docs.
