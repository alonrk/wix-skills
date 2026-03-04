# Wix Stores

Actionable playbook for Wix Stores APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-solutions/stores`

## Operation Registry

- `tools/http/operations/wix-stores.json`

## Operation Cards

### 1) Query Products

- **Operation id**: `wix-stores.query-products`
- **HTTP**: `POST https://www.wixapis.com/stores/v3/products/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.query-products --body '{"query":{"paging":{"limit":50}}}'
```

### 2) Create Product

- **Operation id**: `wix-stores.create-product`
- **HTTP**: `POST https://www.wixapis.com/stores/v3/products`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.create-product --body '{"product":{"name":"New Product","productType":"physical"}}'
```

## Guardrails

- Do not mix Catalog V1 and V3 payload assumptions.
- Confirm required write scopes before mutating operations.
- Keep product create payload minimal unless user requests advanced fields.
