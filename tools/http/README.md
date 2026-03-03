# Direct Wix REST HTTP Layer

This folder provides direct REST execution.

## Auth Resolution Order

`tools/http/wix-auth.js` resolves auth in this order:
1. Signed instance (`WIX_SIGNED_INSTANCE` or `WIX_INSTANCE`)
2. OAuth token (`WIX_OAUTH_ACCESS_TOKEN` or `WIX_ACCESS_TOKEN`)
3. API key (`WIX_API_KEY`)

Optional context headers:
- `WIX_ACCOUNT_ID` -> `wix-account-id`
- `WIX_SITE_ID` -> `wix-site-id`

## Request Runner

`tools/http/wix-request.js` executes named operations from `tools/http/operations/*.json`.

### Usage

```bash
node tools/http/wix-request.js --operation wix-sites.query-sites --params '{"limit":50}' --body '{"query":{"cursorPaging":{"limit":50}}}' --dry-run
```

Arguments:
- `--operation` (required): operation id from registries
- `--params` (optional): JSON object for URL template params
- `--body` (optional): JSON request body
- `--dry-run` (optional): prints resolved request, no network call
- `--timeout-ms` (optional): request timeout, default `30000`

## Registry Shape

Each operation object supports:
- `id`
- `method`
- `urlTemplate`
- `authModes` (`none`, `signed_instance`, `oauth`, `api_key`)
- `requiredParams`
- `bodyRequired`
- `sourceDocUrl`

## Notes

- If no allowed auth mode is available, script exits with an error.
- `wix-request.js` is intended to be called by skills/playbooks first.
- Missing coverage should be handled by adding operation definitions in `tools/http/operations/`.
