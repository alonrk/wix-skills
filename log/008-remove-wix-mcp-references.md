# Task 008: Remove Legacy Tooling References

## Plan

Convert the repository to a strict direct-REST-only guidance model by removing all legacy tooling references from active docs, skills, templates, and operation metadata.

## Decisions

- Keep execution path fully centered on `tools/http/wix-request.js` and operation registries.
- Replace fallback wording with "add missing operation coverage" instead of external tool fallback.
- Keep historical logs, but normalize wording so repo-wide references stay direct-REST-only.

## Execution Notes

- Updated top-level guidance:
  - `README.md`
  - `AGENTS.md`
  - `CONTRIBUTING.md`
  - `tools/REGISTRY.md`
  - `tools/http/README.md`
- Updated integration playbooks to remove legacy fallback/tooling references:
  - `tools/integrations/wix-sites.md`
  - `tools/integrations/wix-domains.md`
  - `tools/integrations/wix-site-properties.md`
  - `tools/integrations/wix-rest-universal.md`
  - `tools/integrations/wix-account-level.md`
- Updated skills and templates:
  - `skills/wix-project-context/SKILL.md`
  - `skills/wix-sites-management/SKILL.md`
  - `skills/wix-rest-api-management/SKILL.md`
  - `skills/wix-stores-management/SKILL.md`
  - `skills/wix-bookings-management/SKILL.md`
  - `skills/wix-cms-management/SKILL.md`
  - `skills/_templates/SKILL.md`
  - `skills/_templates/checklist.md`
- Updated operation metadata to remove recipe-only source links:
  - `tools/http/operations/wix-sites.json`
- Normalized wording in existing task logs (`001`-`007`) to remove legacy tooling references.

## Validation Notes

- Searched repository for legacy tooling keywords after edits.
- Result: no remaining matches.
