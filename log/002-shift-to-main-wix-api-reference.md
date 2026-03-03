# Task 002: Shift Skills to Main Wix API Reference

## Plan

Refactor existing skills so they are anchored in main Wix REST API documentation (`/docs/api-reference/...`) instead of recipe pages.

## Decisions

- Main API reference pages are the primary source of truth.
- Recipe pages remain optional accelerators only.
- Skill execution flow now prefers:
  1. Main API docs for method selection.
  2. Method article + schema confirmation for concrete request shape.
  3. Direct REST execution with docs-derived endpoint/body only.

## Execution Notes

- Updated shared docs:
  - `README.md`
  - `AGENTS.md`
  - `CONTRIBUTING.md`
  - `skills/_templates/SKILL.md`
  - `skills/_templates/checklist.md`
  - `skills/_templates/wix-skill-catalog.md`
- Updated domain skills:
  - `skills/wix-project-context/SKILL.md`
  - `skills/wix-sites-management/SKILL.md`
  - `skills/wix-stores-management/SKILL.md`
  - `skills/wix-bookings-management/SKILL.md`
  - `skills/wix-cms-management/SKILL.md`
- Replaced recipe links in primary sections with `dev.wix.com/docs/api-reference/...` links.
- Kept non-primary links clearly labeled optional accelerators.

## Validation Notes

- Ran `bash validate-skills.sh`.
- Result: `Validation passed.`

## Follow-Up

- Add explicit API-reference links for payments/forms/media/blog/events in next skill batch.
