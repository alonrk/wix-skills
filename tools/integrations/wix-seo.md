# Wix SEO

Actionable playbook for Wix SEO APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/site/viewer/seo-tags`

## Operation Registry

- `tools/http/operations/wix-seo.json`

## Operation Cards

### 1) Resolve Static Page SEO Tags

- **Operation id**: `wix-seo.resolve-static-page-seo-tags`
- **HTTP**: `GET https://www.wixapis.com/promote/seo/v1/resolve-static-page-seo-tags?pageName={pageName}&pageUrl={pageUrl}`
- **Required params**:
  - `pageName` (static page identifier, for example `about`)
  - `pageUrl` (full canonical URL)
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-seo.resolve-static-page-seo-tags --params '{"pageName":"about","pageUrl":"https://example.com/about"}'
```

## Guardrails

- Always pass full canonical `pageUrl` and matching `pageName`.
- Use docs-backed SEO tag fields only when extending this domain.
- Add additional SEO operations only to `tools/http/operations/wix-seo.json`.
