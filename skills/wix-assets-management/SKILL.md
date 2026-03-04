---
name: wix-assets-management
description: Manages Wix assets APIs for media file listing, import, and media management workflows. Use when requests involve Media Manager files, media ingestion, and asset retrieval tasks.
---

# Wix Assets Management

## Use This Skill When

- The request is about media files or asset ingestion.
- The user needs file import/list/retrieval operations.
- The task belongs to assets/media API families.

## Primary Flow

1. Open `tools/integrations/wix-assets.md`.
2. Select operation id for listing/import operations.
3. Execute with `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`.
4. Add missing operations to:
   - `tools/http/operations/wix-assets.json`

## Integration Playbook

- `tools/integrations/wix-assets.md`

## Guardrails

- Validate external media URLs before import requests.
- Keep imported file metadata minimal unless user requested otherwise.
- Use paging for large list operations.
