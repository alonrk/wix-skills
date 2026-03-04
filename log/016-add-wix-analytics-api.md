# Task 016: Add Wix Analytics API Coverage

## Plan

Add Wix Analytics data retrieval support using the repository convention:
- dedicated operation registry
- actionable integration playbook
- domain skill wiring
- registry/docs updates

## Decisions

- Create a dedicated `wix-analytics` domain instead of mixing analytics cards into broader business-management.
- Start with the core docs-backed analytics method for data retrieval:
  - `GET /analytics/v2/site-analytics/data`
- Keep strict domain ownership: analytics operations live only in `wix-analytics`.

## Execution Notes

- Added operation registry:
  - `tools/http/operations/wix-analytics.json`
- Added integration playbook:
  - `tools/integrations/wix-analytics.md`
- Added skill:
  - `skills/wix-analytics-management/SKILL.md`
- Updated routing/docs:
  - `tools/REGISTRY.md`
  - `tools/integrations/wix-rest-universal.md`
  - `README.md`
  - `AGENTS.md`
  - `skills/_templates/wix-skill-catalog.md`
  - `skills/wix-project-context/SKILL.md`

## Validation Notes

- Ran duplicate scan across `tools/http/operations/*.json` by method+URL.
- Ran `bash validate-skills.sh`.
- Ran dry-run for:
  - `wix-analytics.get-analytics-data`
- Ran lint diagnostics for edited files.
