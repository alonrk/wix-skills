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

### 3) Get Product

- **Operation id**: `wix-stores.get-product`
- **HTTP**: `GET https://www.wixapis.com/stores/v3/products/{productId}`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.get-product --params '{"productId":"<product-guid>"}'
```

### 4) Get Product By Slug

- **Operation id**: `wix-stores.get-product-by-slug`
- **HTTP**: `GET https://www.wixapis.com/stores/v3/products/slug/{slug}`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.get-product-by-slug --params '{"slug":"my-product-slug"}'
```

### 5) Search Products

- **Operation id**: `wix-stores.search-products`
- **HTTP**: `POST https://www.wixapis.com/stores/v3/products/search`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.search-products --body '{"query":{"paging":{"limit":50}}}'
```

### 6) Bulk Delete Products

- **Operation id**: `wix-stores.bulk-delete-products`
- **HTTP**: `POST https://www.wixapis.com/stores/v3/bulk/products/delete`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.bulk-delete-products --body '{"productIds":["<product-guid-1>","<product-guid-2>"]}'
```

### 7) Query Inventory

- **Operation id**: `wix-stores.query-inventory`
- **HTTP**: `POST https://www.wixapis.com/stores-reader/v2/inventoryItems/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.query-inventory --body '{"query":{"paging":{"limit":50}}}'
```

### 8) Query Collections

- **Operation id**: `wix-stores.query-collections`
- **HTTP**: `POST https://www.wixapis.com/stores-reader/v1/collections/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-stores.query-collections --body '{"query":{"paging":{"limit":50}}}'
```

## Guardrails

- Do not mix Catalog V1 and V3 payload assumptions.
- Confirm required write scopes before mutating operations.
- Keep product create payload minimal unless user requests advanced fields.
