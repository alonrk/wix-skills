# Wix Site URLs

Actionable playbook for Wix Site URLs APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-management/site-urls`

## Operation Registry

- `tools/http/operations/wix-site-urls.json`

## Operation Cards

### 1) List Published Site URLs

- **Operation id**: `wix-site-urls.list-published-site-urls`
- **HTTP**: `GET https://www.wixapis.com/urls-server/v2/published-site-urls`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-site-urls.list-published-site-urls
```

## Guardrails

- If no URLs are returned, verify the target site is published.
- Use this domain as the single owner for Site URLs operations.
