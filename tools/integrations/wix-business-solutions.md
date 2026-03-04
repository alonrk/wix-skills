# Wix Business Solutions

Actionable playbook for business-solutions APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-solutions`

## Operation Registry

- `tools/http/operations/wix-business-solutions.json`

## Domain-Specific Playbooks

- `tools/integrations/wix-stores.md`
- `tools/integrations/wix-bookings.md`
- `tools/integrations/wix-cms.md`

## Operation Cards

### 1) Query Store Products

- **Operation id**: `wix-business-solutions.query-store-products`
- **HTTP**: `POST https://www.wixapis.com/stores/v3/products/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-business-solutions.query-store-products --body '{"query":{"paging":{"limit":50}}}'
```

### 2) Query CMS Data Items

- **Operation id**: `wix-business-solutions.query-data-items`
- **HTTP**: `POST https://www.wixapis.com/wix-data/v2/items/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-business-solutions.query-data-items --body '{"dataCollectionId":"<collection-guid>","query":{"paging":{"limit":50}}}'
```
