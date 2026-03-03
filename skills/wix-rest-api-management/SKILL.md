---
name: wix-rest-api-management
description: Handles any Wix REST API task across all top-level domains. Use when user requests do not fit a single domain skill or span multiple Wix API families.
---

# Wix REST API Management

## Use This Skill When

- The request spans multiple Wix domains (for example sites + cms + payments).
- The target API family is not yet covered by a dedicated domain skill.
- You need an all-purpose flow to discover and execute any Wix REST method.

## Primary Flow

1. Open `tools/REGISTRY.md` and select top-level integration playbook.
2. Discover method in Wix REST API reference.
3. Confirm endpoint and request schema from Wix method docs.
4. Execute direct REST using `tools/http/wix-request.js` when operation id exists.
5. If operation id does not exist, add it to the appropriate operation registry and then execute.

## Integration Playbooks

- `tools/integrations/wix-rest-universal.md`
- `tools/integrations/wix-account-level.md`
- `tools/integrations/wix-business-management.md`
- `tools/integrations/wix-business-solutions.md`
- `tools/integrations/wix-crm.md`
- `tools/integrations/wix-assets.md`
- `tools/integrations/wix-app-management.md`
- `tools/integrations/wix-site-api.md`
- `tools/integrations/wix-rest-articles.md`

## Guardrails

- Never guess endpoint URL or request body.
- Always respect identity restrictions documented in method article.
- Prefer repeatable operation mapping for frequently used endpoints.
