# Task 014: Expand Stores Domain Coverage

## Plan

Deepen stores-domain coverage with additional docs-backed operations while keeping strict domain ownership under `wix-stores`.

## Decisions

- Keep all new stores methods in `tools/http/operations/wix-stores.json`.
- Expand `tools/integrations/wix-stores.md` with operation cards matching each new operation id.
- Avoid cross-domain duplication; stores remains the single owner for stores catalog/inventory operations.

## Execution Notes

- Expanded stores operation registry with additional docs-backed methods:
  - `wix-stores.get-product`
  - `wix-stores.get-product-by-slug`
  - `wix-stores.search-products`
  - `wix-stores.bulk-delete-products`
  - `wix-stores.query-inventory`
  - `wix-stores.query-collections`
- Updated stores integration playbook with matching operation cards and run commands:
  - `tools/integrations/wix-stores.md`

## Validation Notes

- Global duplicate scan by method+URL across all registries:
  - result: `NO_DUPLICATES`
- Ran `bash validate-skills.sh` -> `Validation passed.`
- Dry-run checks passed for newly added stores operations:
  - `wix-stores.get-product`
  - `wix-stores.get-product-by-slug`
  - `wix-stores.search-products`
  - `wix-stores.bulk-delete-products`
  - `wix-stores.query-inventory`
  - `wix-stores.query-collections`
- Lint check on edited files -> no errors.
