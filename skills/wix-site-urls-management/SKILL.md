---
name: wix-site-urls-management
description: Manages Wix Site URLs APIs for retrieving published site URLs, including primary and multilingual domain URLs. Use when requests involve published URL discovery.
---

# Wix Site URLs Management

## Use This Skill When

- The request asks for published site URLs.
- The workflow needs primary/free/premium URL inspection.
- Multilingual published URL discovery is required.

## Primary Flow

1. Open `tools/integrations/wix-site-urls.md`.
2. Select operation id for the requested action.
3. Execute via `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-site-urls.json`

## Integration Playbook

- `tools/integrations/wix-site-urls.md`

## Guardrails

- If empty response is returned, check publication state first.
- Keep Site URLs operations owned in `wix-site-urls` domain only.
