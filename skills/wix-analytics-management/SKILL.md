---
name: wix-analytics-management
description: Manages Wix Analytics APIs for site analytics reporting and metrics retrieval. Use when requests involve pulling analytics measurements over a date range.
---

# Wix Analytics Management

## Use This Skill When

- The request is to retrieve Wix site analytics metrics.
- The workflow requires date-range based analytics reporting.
- The user needs operational analytics data for dashboards or checks.

## Primary Flow

1. Open `tools/integrations/wix-analytics.md`.
2. Choose the matching operation id.
3. Execute via `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-analytics.json`

## Integration Playbook

- `tools/integrations/wix-analytics.md`

## Guardrails

- Keep date range within Wix analytics retention limits.
- Use docs-backed measurement enums only.
- Confirm site/app auth context before data requests.
