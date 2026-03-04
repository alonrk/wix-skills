# Task 011: Align CMS Skill Convention and Integrations

## Plan

Bring `wix-cms-management` to the same domain-skill convention as stores/bookings by adding a dedicated CMS integration playbook and CMS operation registry.

## Decisions

- Add a dedicated `wix-cms` integration guide under `tools/integrations/`.
- Add a dedicated CMS operation registry under `tools/http/operations/`.
- Keep `wix-business-solutions` as aggregate coverage, while routing CMS-specific work through the CMS guide.

## Execution Notes

- Added dedicated CMS operation registry:
  - `tools/http/operations/wix-cms.json`
- Added dedicated CMS integration playbook:
  - `tools/integrations/wix-cms.md`
- Updated CMS skill to domain-skill convention:
  - `skills/wix-cms-management/SKILL.md`
- Updated shared routing docs:
  - `tools/REGISTRY.md`
  - `tools/integrations/wix-business-solutions.md`

## Validation Notes

- Ran `bash validate-skills.sh` -> `Validation passed.`
- Ran CMS dry-run:
  - `wix-cms.query-data-items` resolved successfully
- Lint check on updated files -> no errors.
