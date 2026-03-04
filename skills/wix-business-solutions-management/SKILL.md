---
name: wix-business-solutions-management
description: Manages Wix business-solutions APIs across vertical products. Use when requests involve stores, bookings, CMS, events, plans, restaurants, and other solution-level business entities.
---

# Wix Business Solutions Management

## Use This Skill When

- The request maps to a business solution vertical API family.
- The task is not strictly account/platform metadata.
- The request spans solution modules beyond existing specialized skills.

## Primary Flow

1. Open `tools/integrations/wix-business-solutions.md`.
2. Select operation id by vertical and action.
3. Execute with `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`.
4. Add missing operations to:
   - `tools/http/operations/wix-business-solutions.json`

## Integration Playbook

- `tools/integrations/wix-business-solutions.md`

## Related Specialized Skills

- `wix-stores-management`
- `wix-bookings-management`
- `wix-cms-management`

## Guardrails

- Prefer specialized skills for stores/bookings/cms when the request is narrow.
- Keep solution boundaries explicit when handling cross-vertical actions.
- Validate required app/module assumptions before mutations.
