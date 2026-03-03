---
name: wix-cms-management
description: Manages Wix CMS collections, schema, references, and data item CRUD operations. Use when users need to create or modify CMS structure or content programmatically.
---

# Wix CMS Management

## Use This Skill When

- The user requests CMS collection schema creation or field updates.
- The task involves inserting, querying, updating, deleting, or bulk-processing CMS data items.
- The request includes single/multi-reference relationship management.

## Primary Flow (Main API Reference First)

1. Call `WixREADME`.
2. Locate CMS methods via `SearchWixRESTDocumentation` or `BrowseWixRESTDocsMenu`.
3. Read method docs with `ReadFullDocsArticle`.
4. Execute with `CallWixSiteAPI` using docs-defined endpoint/body.

## Main API Docs Targets

- Data Items API:
  - https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/introduction
  - https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/save-data-item
  - https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/bulk-save-data-items
- Data Collections API:
  - https://dev.wix.com/docs/api-reference/business-solutions/cms/collection-management/data-collections/create-data-collection
- References operations:
  - https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/insert-data-item-reference
  - https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/bulk-insert-data-item-references
- Error catalog:
  - https://dev.wix.com/docs/api-reference/business-solutions/cms/wix-data-error-codes

## Optional Recipe Accelerators

- https://dev.wix.com/docs/picasso/wix-ai-docs/recipes-v2/manage/cms/recipe-cms-data-items-crud
- https://dev.wix.com/docs/picasso/wix-ai-docs/recipes-v2/manage/cms/recipe-cms-schema-management
- https://dev.wix.com/docs/picasso/wix-ai-docs/recipes-v2/manage/cms/recipe-cms-references-relationships

## Guardrails

- Do not treat multi-reference fields as regular scalar fields in item CRUD payloads.
- Preserve collection and field identifiers exactly; avoid ad hoc renaming.
- Use filter-based bulk operations carefully and explicitly scope destructive actions.

## Error Handling

- Permission/scope errors on schema operations:
  - Return required scope and halt destructive retries.
- Reference operation mismatch:
  - Switch to dedicated reference endpoints per recipe guidance.
