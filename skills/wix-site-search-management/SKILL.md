---
name: wix-site-search-management
description: Manages Wix Site Search APIs to retrieve site documents by query, filters, sorting, and aggregations. Use when requests involve searching indexed site content.
---

# Wix Site Search Management

## Use This Skill When

- The request asks to search site documents across supported Wix document types.
- The workflow requires filter/sort/paging-based search results.
- The user needs search aggregations or free-text lookup in indexed content.

## Primary Flow

1. Open `tools/integrations/wix-site-search.md`.
2. Select operation id for the requested search action.
3. Execute via `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-site-search.json`

## Integration Playbook

- `tools/integrations/wix-site-search.md`

## Guardrails

- Require explicit `documentType` and `search` payloads.
- Keep paging and filters explicit for reproducible results.
- Avoid guessing document schemas; follow docs-backed fields only.
