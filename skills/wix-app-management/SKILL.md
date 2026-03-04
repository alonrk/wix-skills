---
name: wix-app-management
description: Manages Wix app-management APIs for app instances, plugin placement status, and app-facing platform integrations. Use when requests involve app runtime context and app lifecycle operations.
---

# Wix App Management

## Use This Skill When

- The request is about app instance state, app plugin placements, or app-level integrations.
- The operation is authenticated as an app and not as a generic site/account user.
- The user asks for app-management API actions.

## Primary Flow

1. Open `tools/integrations/wix-app-management.md`.
2. Select the operation id.
3. Execute with `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-app-management.json`

## Integration Playbook

- `tools/integrations/wix-app-management.md`

## Guardrails

- Confirm app-auth context before execution.
- Respect app-scoped permissions and identity requirements.
- Keep app-management actions separate from business-data mutations.
