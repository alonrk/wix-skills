# Wix CRM

Actionable playbook for CRM APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/crm`

## Operation Registry

- `tools/http/operations/wix-crm.json`

## Operation Cards

### 1) Query Contacts

- **Operation id**: `wix-crm.query-contacts`
- **HTTP**: `POST https://www.wixapis.com/contacts/v4/contacts/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-crm.query-contacts --body '{"query":{"paging":{"limit":50}}}'
```

### 2) List Contact Labels

- **Operation id**: `wix-crm.list-contact-labels`
- **HTTP**: `GET https://www.wixapis.com/contacts/v4/labels`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-crm.list-contact-labels
```

### 3) Create Contact

- **Operation id**: `wix-crm.create-contact`
- **HTTP**: `POST https://www.wixapis.com/contacts/v4/contacts`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-crm.create-contact --body '{"info":{"name":{"first":"Jane","last":"Doe"},"emails":{"items":[{"email":"jane@example.com"}]}}}'
```
