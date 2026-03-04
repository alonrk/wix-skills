---
name: wix-email-marketing-management
description: Manages Wix Email Marketing APIs for campaign retrieval, publishing, sender verification checks, and campaign statistics. Use when requests involve email campaign operations.
---

# Wix Email Marketing Management

## Use This Skill When

- The request involves Wix email campaigns.
- The user needs campaign-level statistics or sender-email checks.
- The workflow includes publishing a campaign as landing page or email distribution.

## Primary Flow

1. Open `tools/integrations/wix-email-marketing.md`.
2. Select operation id matching the requested action.
3. Execute via `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-email-marketing.json`

## Integration Playbook

- `tools/integrations/wix-email-marketing.md`

## Guardrails

- Validate campaign target before publish operations.
- Use verified sender emails for email distribution.
- Treat publish as a mutating action and confirm intent when ambiguity exists.
