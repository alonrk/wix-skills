# Task 006: All REST API Catalog and Pattern Coverage

## Plan

Use Wix REST docs menu browsing to map all major Wix REST API domains, then add them to this repository's skills/tools pattern.

## Decisions

- Treat "all REST APIs" as all top-level REST families and their subcategories from Wix API reference.
- Add one integration playbook per top-level domain.
- Add one universal skill for cross-domain Wix REST operations.
- Keep existing domain-specific skills/tools intact.

## Execution Notes

- Pulled top-level API reference sections from docs navigation:
  - Articles
  - App Management
  - Business Solutions
  - Assets
  - CRM
  - Business Management
  - Account Level
  - Site
- Added cataloged integration guides:
  - `tools/integrations/wix-rest-universal.md`
  - `tools/integrations/wix-account-level.md`
  - `tools/integrations/wix-business-management.md`
  - `tools/integrations/wix-business-solutions.md`
  - `tools/integrations/wix-crm.md`
  - `tools/integrations/wix-assets.md`
  - `tools/integrations/wix-app-management.md`
  - `tools/integrations/wix-site-api.md`
  - `tools/integrations/wix-rest-articles.md`
- Added universal skill:
  - `skills/wix-rest-api-management/SKILL.md`
- Updated registry and context wiring:
  - `tools/REGISTRY.md`
  - `AGENTS.md`
  - `README.md`
  - `skills/wix-project-context/SKILL.md`
  - `skills/_templates/wix-skill-catalog.md`

## Validation Notes

- Ran `bash validate-skills.sh`.
- Result: `Validation passed.`

## Follow-Up

- Deepen each domain playbook with endpoint-level operation cards in iterative batches.
