---
name: wix-blog-management
description: Manages Wix Blog APIs for posts, categories, and tags retrieval/query operations. Use when requests involve blog content discovery, filtering, and post-level lookup.
---

# Wix Blog Management

## Use This Skill When

- The request involves blog posts, categories, or tags.
- The workflow needs filtering or querying blog content.
- The user asks for post lookup or content listing.

## Primary Flow

1. Open `tools/integrations/wix-blog.md`.
2. Select operation id for the requested action.
3. Execute via `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-blog.json`

## Integration Playbook

- `tools/integrations/wix-blog.md`

## Guardrails

- Prefer query operations with explicit paging for broad retrieval.
- Confirm target post/category/tag identifiers before single-entity reads.
- Keep Blog operations domain-scoped and docs-backed.
