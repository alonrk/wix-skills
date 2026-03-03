# Task 003: Tools Integrations Pattern for Wix Sites

## Plan

Implement a `tools/` layer inspired by marketingskills so agents can discover Wix API integrations through a registry and focused integration guides.

## Scope

- Docs-only implementation (no CLI wrappers).
- Initial domain family:
  - Sites
  - Domains
  - Site Properties

## Decisions

- Mirror the pattern:
  - `tools/REGISTRY.md` as index and selection entrypoint.
  - `tools/integrations/*.md` for per-API operational guidance.
- Keep main Wix API reference docs as source of truth.
- Keep existing skills unchanged in behavior, but wire repository docs to the tools layer.

## Execution Notes

- Added registry index:
  - `tools/REGISTRY.md`
- Added integration guides:
  - `tools/integrations/wix-sites.md`
  - `tools/integrations/wix-domains.md`
  - `tools/integrations/wix-site-properties.md`
- Updated repository docs to include and enforce the tools-layer workflow:
  - `README.md`
  - `AGENTS.md`
  - `CONTRIBUTING.md`
- Integration docs include capabilities matrix, auth context, common operations, and guardrails.

## Validation Notes

- Ran `bash validate-skills.sh`.
- Result: `Validation passed.`
- Docs sanity checks completed:
  - `tools/REGISTRY.md` guide links match integration filenames.
  - Integration files present: 3 (`wix-sites`, `wix-domains`, `wix-site-properties`).
  - Registry table renders with expected columns (category, API, CLI, SDK, guide).

## Follow-Up

- Add integrations for stores, bookings, cms, and platform apps.
- Optionally add `tools/clis/` wrappers later, if needed.
