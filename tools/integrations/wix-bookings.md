# Wix Bookings

Actionable playbook for Wix Bookings APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-solutions/bookings`

## Operation Registry

- `tools/http/operations/wix-bookings.json`

## Operation Cards

### 1) Query Services

- **Operation id**: `wix-bookings.query-services`
- **HTTP**: `POST https://www.wixapis.com/_api/bookings/v2/services/query`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-bookings.query-services --body '{"query":{"paging":{"limit":50}}}'
```

## Guardrails

- Keep service-type handling explicit (`APPOINTMENT`, `CLASS`, `COURSE`).
- Verify app/module enablement before mutating flows.
- Use docs-backed payloads only for service/staff writes.
