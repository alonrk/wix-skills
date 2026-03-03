# Wix Account Level

Actionable playbook for account-level APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/account-level`

## Operation Registry

- `tools/http/operations/wix-account-level.json`

## Operation Cards

### 1) Query Sites

- **Operation id**: `wix-account-level.query-sites`
- **HTTP**: `POST https://www.wixapis.com/site-list/v2/sites/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-account-level.query-sites --body '{"query":{"cursorPaging":{"limit":50}}}'
```

### 2) Search Team

- **Operation id**: `wix-account-level.search-team`
- **HTTP**: `POST https://www.wixapis.com/roles-management/v3/team/search`
- **Auth notes**: account-level API key only.
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-account-level.search-team --body '{"paging":{"limit":50,"offset":0}}'
```

## Fallback

If an account-level method is missing from the registry:
1. Locate the method in Wix REST API reference.
2. Confirm endpoint and schema from docs.
3. Add operation to `wix-account-level.json`.
