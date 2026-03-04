---
name: wix-account-level-management
description: Manages account-level Wix APIs such as site lists, domains, and team/user access. Use when requests are scoped to account ownership, account assets, or account permissions.
---

# Wix Account Level Management

## Use This Skill When

- The request is about account-owned sites, domains, or account users/team members.
- You need account-level scope rather than a single site scope.
- The user asks for account inventory, account roles, or account-level administration.

## Primary Flow

1. Open `tools/integrations/wix-account-level.md`.
2. Select an operation card and operation id.
3. Execute with:
   - `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`
4. If operation coverage is missing, add it to:
   - `tools/http/operations/wix-account-level.json`

## Integration Playbook

- `tools/integrations/wix-account-level.md`

## Guardrails

- Do not run account-wide mutations without explicit user confirmation.
- Do not infer account identifiers or permission assumptions.
- Keep account-level operations separate from site-level operations.
