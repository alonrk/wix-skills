# Task 007: Operations Pattern for All Integrations

## Plan

Apply the `tools/http/operations` pattern consistently across all integration playbooks so each integration has:
- a dedicated operation registry JSON file,
- concrete operation IDs,
- executable `wix-request.js` command examples.

## Decisions

- Keep operation IDs namespaced by integration (`wix-<integration>.*`).
- Use Wix REST docs-derived method endpoints and docs links for all newly added operations.
- Add `none` as an auth mode in `wix-auth.js` for OAuth token bootstrap operations (`/oauth2/token`).

## Execution Notes

- Added operation registries:
  - `tools/http/operations/wix-rest-universal.json`
  - `tools/http/operations/wix-account-level.json`
  - `tools/http/operations/wix-business-management.json`
  - `tools/http/operations/wix-business-solutions.json`
  - `tools/http/operations/wix-crm.json`
  - `tools/http/operations/wix-assets.json`
  - `tools/http/operations/wix-app-management.json`
  - `tools/http/operations/wix-site-api.json`
  - `tools/http/operations/wix-rest-articles.json`
- Updated integration playbooks to operation-card format with command examples:
  - `tools/integrations/wix-rest-universal.md`
  - `tools/integrations/wix-account-level.md`
  - `tools/integrations/wix-business-management.md`
  - `tools/integrations/wix-business-solutions.md`
  - `tools/integrations/wix-crm.md`
  - `tools/integrations/wix-assets.md`
  - `tools/integrations/wix-app-management.md`
  - `tools/integrations/wix-site-api.md`
  - `tools/integrations/wix-rest-articles.md`
- Updated `tools/REGISTRY.md` with the expanded operation registry list.
- Updated direct runtime docs and auth resolver:
  - `tools/http/README.md` (documents `none` auth mode).
  - `tools/http/wix-auth.js` (adds `none` mode support).

## Validation Notes

- Ran `bash validate-skills.sh` -> `Validation passed.`
- Ran representative operation dry-runs:
  - `wix-account-level.search-team`
  - `wix-business-management.list-locations`
  - `wix-rest-articles.create-oauth-access-token` (verified `authMode: none`)
- Ran `ReadLints` for modified integration/runtime files -> no errors.
