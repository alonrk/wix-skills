---
name: wix-seo-management
description: Manages Wix SEO APIs for resolving page SEO tags and related metadata. Use when requests involve SEO tags, meta data resolution, and page-level SEO outputs.
---

# Wix SEO Management

## Use This Skill When

- The request asks for SEO tags for a page.
- The workflow needs resolved metadata for static pages.
- The user asks for page-level SEO output generation.

## Primary Flow

1. Open `tools/integrations/wix-seo.md`.
2. Select operation id matching requested SEO action.
3. Execute via `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-seo.json`

## Integration Playbook

- `tools/integrations/wix-seo.md`

## Guardrails

- Require full canonical URL inputs for SEO resolution.
- Keep SEO operations docs-backed and domain-scoped.
- Avoid cross-domain duplication of SEO methods.
