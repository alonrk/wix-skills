# Task 010: Align Stores and Bookings Skill Conventions

## Plan

Align `wix-stores-management` and `wix-bookings-management` with the domain-skill convention and add dedicated integration playbooks plus operation registries for each.

## Decisions

- Add dedicated integrations for stores and bookings instead of relying only on the generic business-solutions guide.
- Add dedicated operation files for stores and bookings and keep them focused on docs-backed operations.
- Keep existing stores/bookings skills, but rewrite their structure to match newer domain skill conventions.

## Execution Notes

- Added dedicated operation registries:
  - `tools/http/operations/wix-stores.json`
  - `tools/http/operations/wix-bookings.json`
- Added dedicated integration playbooks:
  - `tools/integrations/wix-stores.md`
  - `tools/integrations/wix-bookings.md`
- Updated existing skills to match domain-skill convention:
  - `skills/wix-stores-management/SKILL.md`
  - `skills/wix-bookings-management/SKILL.md`
- Updated shared routing docs:
  - `tools/REGISTRY.md`
  - `tools/integrations/wix-business-solutions.md`

## Validation Notes

- Ran `bash validate-skills.sh` -> `Validation passed.`
- Dry-run checks:
  - `wix-stores.query-products` resolved successfully
  - `wix-bookings.query-services` resolved successfully
- Lint check on updated files -> no errors.
