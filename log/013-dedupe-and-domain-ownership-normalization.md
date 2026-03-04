# Task 013: Dedupe and Domain Ownership Normalization

## Plan

Remove duplicate operations/integration cards and keep each API method under a single most-relevant domain integration/registry.

## Decisions

- Keep leaf domain registries (`wix-sites`, `wix-site-properties`, `wix-stores`, `wix-bookings`, `wix-cms`, `wix-crm`, `wix-assets`, etc.) as operation owners.
- Convert aggregate/orchestration integrations (`wix-rest-universal`, `wix-business-solutions`) to routing guides instead of duplicate operation owners.
- Keep only unique methods in broad domains like `wix-account-level`, `wix-business-management`, and `wix-site-api`.

## Execution Notes

- Added ownership normalization:
  - `wix-rest-universal` registry converted to routing-only (`operations: []`)
  - `wix-business-solutions` registry converted to routing-only (`operations: []`)
- Removed duplicate operation ownership and cards from broad domains:
  - `tools/http/operations/wix-account-level.json` (kept unique `search-team` only)
  - `tools/http/operations/wix-business-management.json` (removed duplicated site-properties read)
  - `tools/http/operations/wix-site-api.json` (removed duplicated site-properties read)
  - `tools/http/operations/wix-rest-articles.json` (removed duplicated sites baseline op)
  - `tools/integrations/wix-account-level.md`
  - `tools/integrations/wix-business-management.md`
  - `tools/integrations/wix-site-api.md`
  - `tools/integrations/wix-rest-articles.md`
- Converted aggregate integrations to explicit routers:
  - `tools/integrations/wix-rest-universal.md`
  - `tools/integrations/wix-business-solutions.md`

## Validation Notes

- Duplicate scan across `tools/http/operations/*.json` by method+URL:
  - result: `NO_DUPLICATES`
- Duplicate scan across integration markdown operation IDs:
  - result: `NO_DUPLICATE_OPERATION_IDS_IN_INTEGRATIONS`
- Ran `bash validate-skills.sh` -> `Validation passed.`
- Dry-run smoke checks passed for domain-owned operations:
  - `wix-account-level.search-team`
  - `wix-site-properties.get-site-properties`
  - `wix-stores.create-product`
- Lint check on edited files -> no errors.
