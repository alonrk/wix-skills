# Wix REST Articles

Reference + executable baseline for auth and query guidance.

## Domain Root

- `https://dev.wix.com/docs/api-reference/articles`

## Operation Registry

- `tools/http/operations/wix-rest-articles.json`

## Operation Cards

### 1) Create OAuth Access Token

- **Operation id**: `wix-rest-articles.create-oauth-access-token`
- **HTTP**: `POST https://www.wixapis.com/oauth2/token`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-rest-articles.create-oauth-access-token --body '{"grant_type":"client_credentials","client_id":"<APP_ID>","client_secret":"<APP_SECRET_KEY>","instance_id":"<APP_INSTANCE_ID>"}'
```

## Guidance Focus

Use this integration for cross-cutting rules: authentication, sorting/paging, filtering semantics, error handling, and versioning.
