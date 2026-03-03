# Wix REST Universal

Universal playbook for cross-domain Wix REST work.

## Operation Registry

- `tools/http/operations/wix-rest-universal.json`

## Bootstrap Operation Cards

### 1) Query Sites (routing context)

- **Operation id**: `wix-rest-universal.query-sites`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-rest-universal.query-sites --body '{"query":{"cursorPaging":{"limit":25}}}'
```

### 2) Query Contacts (CRM baseline)

- **Operation id**: `wix-rest-universal.query-contacts`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-rest-universal.query-contacts --body '{"query":{"paging":{"limit":25}}}'
```

### 3) List Files (assets baseline)

- **Operation id**: `wix-rest-universal.list-files`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-rest-universal.list-files
```

## Discovery Flow (for missing operations)

1. Confirm request intent and target API family.
2. Pick target domain from `tools/REGISTRY.md`.
3. Use Wix REST API reference to find the target method article.
4. Confirm method endpoint and schema from docs.
5. Add the operation to that domain's `tools/http/operations/*.json`.
