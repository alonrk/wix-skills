# Wix Site Search

Actionable playbook for Wix Site Search APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-management/site-search`

## Operation Registry

- `tools/http/operations/wix-site-search.json`

## Operation Cards

### 1) Search Site Documents

- **Operation id**: `wix-site-search.search`
- **HTTP**: `POST https://www.wixapis.com/v1/search`
- **Required body fields**:
  - `documentType` (for example `STORES_PRODUCTS`, `BLOG_POSTS`, `BOOKING_SERVICES`)
  - `search` (query object with paging/filter/sort/search details)
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-site-search.search --body '{"documentType":"STORES_PRODUCTS","search":{"search":{"expression":"game","fields":[]},"paging":{"limit":3}}}'
```

## Guardrails

- Always provide both `documentType` and `search` in request body.
- Keep paging limits explicit for predictable responses.
- Add additional Site Search methods only in `tools/http/operations/wix-site-search.json`.
