# Wix Site API

Actionable playbook for site-scoped APIs.

## Domain Roots

- `https://dev.wix.com/docs/api-reference/site`
- `https://dev.wix.com/docs/api-reference/account-level/user-management/contributors`

## Operation Registry

- `tools/http/operations/wix-site-api.json`

## Operation Cards

### 1) Query Site Contributors

- **Operation id**: `wix-site-api.query-site-contributors`
- **HTTP**: `GET https://www.wixapis.com/roles-management/v2/contributors/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-site-api.query-site-contributors
```
