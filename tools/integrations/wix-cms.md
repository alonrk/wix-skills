# Wix CMS

Actionable playbook for Wix CMS APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-solutions/cms`

## Operation Registry

- `tools/http/operations/wix-cms.json`

## Operation Cards

### 1) Query Data Items

- **Operation id**: `wix-cms.query-data-items`
- **HTTP**: `POST https://www.wixapis.com/wix-data/v2/items/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-cms.query-data-items --body '{"dataCollectionId":"<collection-guid>","query":{"paging":{"limit":50}}}'
```

### 2) Save Data Item

- **Operation id**: `wix-cms.save-data-item`
- **HTTP**: `POST https://www.wixapis.com/wix-data/v2/items/save`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-cms.save-data-item --body '{"dataCollectionId":"<collection-guid>","dataItem":{"data":{"title":"New Item"}}}'
```

## Guardrails

- Keep collection IDs and field keys exact; do not rename implicitly.
- Treat reference fields with dedicated reference operations from docs.
- Scope bulk operations carefully before execution.
