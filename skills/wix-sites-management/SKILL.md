---
name: wix-sites-management
description: Manages Wix sites and site-level configuration through account/site APIs. Use when users need site creation, querying, domain operations, or site property updates.
---

# Wix Sites Management

## Use This Skill When

- The user asks to create, query, or configure Wix sites.
- The request involves domains, templates, publishing, or site properties.
- Site-level business configuration must be changed centrally.

## Primary Flow (Playbook First)

1. Open `tools/REGISTRY.md` and select:
   - `wix-sites`
   - `wix-domains`
   - `wix-site-properties`
2. Open the selected integration playbook in `tools/integrations/`.
3. Execute the matching operation id with direct REST:
   - `node tools/http/wix-request.js --operation <operation-id> --params '{...}' --body '{...}'`
4. Auth mode is resolved automatically in this order:
   - signed instance
   - OAuth token
   - API key
5. If operation is not covered by a playbook, use Wix REST docs discovery and add it to the operation registry before execution.

## Integration Playbooks

- `tools/integrations/wix-sites.md`
- `tools/integrations/wix-domains.md`
- `tools/integrations/wix-site-properties.md`

## Guardrails

- Never guess API URL or request body fields.
- Use operation cards from integration playbooks first.
- Use `user-provided` source only when endpoint is explicitly provided by the user.

## Error Handling

- Missing app / Wix Code not enabled:
  - Follow platform install/enable recipe and retry.
- Permission/auth failures:
  - Return required scope/action clearly; stop blind retries.
