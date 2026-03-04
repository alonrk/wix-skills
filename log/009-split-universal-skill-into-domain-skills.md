# Task 009: Split Universal Skill into Domain Skills

## Plan

Replace `wix-rest-api-management` with explicit domain skills so skill activation is unambiguous.

## Decisions

- Remove the universal skill and replace it with domain-scoped skills aligned to integration guides.
- Keep existing domain skills (`wix-sites-management`, `wix-stores-management`, `wix-bookings-management`, `wix-cms-management`) intact.
- Update top-level docs and templates so they reference only clear domain skills.

## Execution Notes

- Added domain-specific skills:
  - `skills/wix-account-level-management/SKILL.md`
  - `skills/wix-business-management/SKILL.md`
  - `skills/wix-business-solutions-management/SKILL.md`
  - `skills/wix-crm-management/SKILL.md`
  - `skills/wix-assets-management/SKILL.md`
  - `skills/wix-app-management/SKILL.md`
  - `skills/wix-site-api-management/SKILL.md`
  - `skills/wix-rest-articles-guidance/SKILL.md`
- Removed universal skill:
  - deleted `skills/wix-rest-api-management/SKILL.md`
  - removed empty `skills/wix-rest-api-management/` directory
- Updated skill routing docs:
  - `README.md`
  - `AGENTS.md`
  - `skills/_templates/wix-skill-catalog.md`
  - `skills/wix-project-context/SKILL.md`

## Validation Notes

- Ran `bash validate-skills.sh`:
  - first run failed due to empty deprecated skill directory
  - after removing the empty directory, result: `Validation passed.`
- Ran `ReadLints` on edited skills/docs: no errors.
