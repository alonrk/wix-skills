---
name: wix-stores-management
description: Manages Wix Stores catalog entities such as products, options, variants, and categories. Use when users need setup, query, creation, or updates for store inventory and catalog data.
---

# Wix Stores Management

## Use This Skill When

- The user needs product or catalog setup.
- The request involves product options, variants, categories, inventory, or pre-order settings.
- The user asks to add missing store pages (cart/checkout) or run bulk product operations.

## Primary Flow (Main API Reference First)

1. Locate target Stores methods in Wix REST API reference.
2. Add or select operation id in `tools/http/operations/`.
3. Execute with `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`.

## Main API Docs Targets

- Catalog V3 product creation:
  - https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/create-product
  - https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/create-product-with-inventory
- Catalog V3 bulk creation:
  - https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/bulk-create-products-with-inventory
- Use Wix REST API reference navigation to locate additional methods for querying/updating products, inventory, and categories.

## Guardrails

- Never mix Catalog V1 and V3 request assumptions.
- Respect revision/version controls for update operations.
- Never invent variant or option payload structure.

## Error Handling

- Stores app missing:
  - Install app through platform recipe and retry.
- Validation failures in bulk operations:
  - Report partial failures explicitly and continue with successful items when appropriate.
