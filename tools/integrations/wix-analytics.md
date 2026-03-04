# Wix Analytics

Actionable playbook for Wix Analytics APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-management/analytics`

## Operation Registry

- `tools/http/operations/wix-analytics.json`

## Operation Cards

### 1) Get Analytics Data

- **Operation id**: `wix-analytics.get-analytics-data`
- **HTTP**: `GET https://www.wixapis.com/analytics/v2/site-analytics/data`
- **Required params**:
  - `startDate` (ISO date, `YYYY-MM-DD`, within last 62 days)
  - `endDate` (ISO date, `YYYY-MM-DD`)
  - `measurementType` (`TOTAL_SALES`, `TOTAL_ORDERS`, `CLICKS_TO_CONTACT`, `TOTAL_SESSIONS`, `TOTAL_FORMS_SUBMITTED`, `TOTAL_UNIQUE_VISITORS`)
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-analytics.get-analytics-data --params '{"startDate":"2026-02-01","endDate":"2026-02-07","measurementType":"TOTAL_SESSIONS"}'
```

## Guardrails

- Keep `startDate` within Wix retention window (62 days).
- Use one measurement per call in this operation card; run multiple calls for multiple measures.
- For new analytics methods, add them only to `tools/http/operations/wix-analytics.json`.
