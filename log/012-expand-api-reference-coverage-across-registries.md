# Task 012: Expand API Reference Coverage Across Registries

## Plan

Go through Wix API reference coverage and expand operation registries and integration playbooks with additional relevant methods, following the repository convention.

## Decisions

- Keep operation IDs namespaced by domain integration.
- Prefer adding docs-backed high-value read/write methods per domain.
- Expand both registry JSON files and integration operation cards together.

## Execution Notes

- Expanded operation registries with additional docs-backed methods:
  - `tools/http/operations/wix-account-level.json` (`count-sites`)
  - `tools/http/operations/wix-business-management.json` (`list-published-site-urls`)
  - `tools/http/operations/wix-crm.json` (`create-contact`)
  - `tools/http/operations/wix-assets.json` (`bulk-import-file`)
  - `tools/http/operations/wix-app-management.json` (`list-app-permissions`)
  - `tools/http/operations/wix-bookings.json` (`create-service`)
  - `tools/http/operations/wix-cms.json` (`save-data-item`)
  - `tools/http/operations/wix-business-solutions.json` (stores/bookings/cms expansion)
  - `tools/http/operations/wix-rest-universal.json` (additional cross-domain baselines)
- Expanded integration playbooks with matching operation cards and run commands:
  - `tools/integrations/wix-account-level.md`
  - `tools/integrations/wix-business-management.md`
  - `tools/integrations/wix-crm.md`
  - `tools/integrations/wix-assets.md`
  - `tools/integrations/wix-app-management.md`
  - `tools/integrations/wix-bookings.md`
  - `tools/integrations/wix-cms.md`
  - `tools/integrations/wix-business-solutions.md`
  - `tools/integrations/wix-rest-universal.md`

## Validation Notes

- Ran `bash validate-skills.sh` -> `Validation passed.`
- Dry-run checks passed for newly added operations:
  - `wix-account-level.count-sites`
  - `wix-business-management.list-published-site-urls`
  - `wix-crm.create-contact`
  - `wix-assets.bulk-import-file`
  - `wix-app-management.list-app-permissions`
  - `wix-bookings.create-service`
  - `wix-cms.save-data-item`
  - `wix-business-solutions.create-store-product`
  - `wix-business-solutions.query-booking-services`
  - `wix-business-solutions.save-cms-data-item`
  - `wix-rest-universal.count-sites`
  - `wix-rest-universal.create-contact`
- Lint check on edited files -> no errors.
