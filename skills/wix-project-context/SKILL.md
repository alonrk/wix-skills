---
name: wix-project-context
description: Gathers and validates Wix account/site context before management operations. Use when site selection, installed app status, or missing identifiers could block Wix API execution.
---

# Wix Project Context

## Use This Skill When

- The user request is Wix-related and does not include enough execution context.
- You need to identify the target `siteId`.
- You need to verify installed apps or Wix Code prerequisites before domain-specific actions.

## Execution Flow

1. Resolve target site:
   - Use `ListWixSites` (optionally with `nameSearch`).
   - Confirm exact target site when multiple matches exist.
2. Gather prerequisite state only as needed:
   - Use integration playbooks in `tools/integrations/` to select known endpoint operations.
   - Execute operations via `node tools/http/wix-request.js --operation <id>`.
   - If operation is missing in playbooks, use Wix REST docs to define it and add it to the registry.
3. Return a compact context block:
   - `siteId`
   - selected site name
   - required app status
   - missing identifiers and next API-ready step.

## Guardrails

- Do not perform unrelated business mutations in this skill.
- Do not guess endpoint URLs or schema.
- Keep context gathering minimal and task-driven.

## Related Skills

- `wix-sites-management`
- `wix-stores-management`
- `wix-bookings-management`
- `wix-cms-management`

## Integration Playbooks

- `tools/integrations/wix-rest-universal.md`
- `tools/integrations/wix-sites.md`
- `tools/integrations/wix-site-properties.md`
