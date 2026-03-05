# Task 018: Add Site Search and Site URLs APIs

## Plan

Add Site Search and Site URLs API coverage using the repository convention:
- dedicated operation registries
- actionable integration playbooks
- dedicated domain skills
- routing and catalog updates

## Decisions

- Add dedicated domains:
  - `wix-site-search`
  - `wix-site-urls`
- Keep strict domain ownership:
  - move `list-published-site-urls` from `wix-business-management` into `wix-site-urls`
- Start with core docs-backed methods:
  - Site Search: `search`
  - Site URLs: `list-published-site-urls`

## Execution Notes

- Added operation registries:
  - `tools/http/operations/wix-site-search.json`
  - `tools/http/operations/wix-site-urls.json`
- Added integration playbooks:
  - `tools/integrations/wix-site-search.md`
  - `tools/integrations/wix-site-urls.md`
- Added skills:
  - `skills/wix-site-search-management/SKILL.md`
  - `skills/wix-site-urls-management/SKILL.md`
- Updated and normalized ownership:
  - `tools/http/operations/wix-business-management.json`
  - `tools/integrations/wix-business-management.md`
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
- Ran dry-runs for:
  - `wix-site-search.search`
  - `wix-site-urls.list-published-site-urls`
- Ran lint diagnostics for edited files.
