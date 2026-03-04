---
name: wix-business-management
description: Manages Wix business-management APIs for platform-level business configuration and operations. Use when requests involve locations, app installation state, site properties, and related business infrastructure.
---

# Wix Business Management

## Use This Skill When

- The request targets business-management APIs (locations, site properties, app installation state).
- The action configures platform/business settings rather than vertical business data.
- You need operational business metadata used across multiple solutions.

## Primary Flow

1. Open `tools/integrations/wix-business-management.md`.
2. Choose the matching operation id.
3. Execute with `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-business-management.json`

## Integration Playbook

- `tools/integrations/wix-business-management.md`

## Guardrails

- Read current state before destructive or overwrite-style updates.
- Keep body payloads docs-backed and minimal.
- Confirm target site/account context before running mutating operations.
