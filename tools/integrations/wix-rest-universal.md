# Wix REST Universal

Universal playbook for cross-domain Wix REST work.

## Operation Registry

- `tools/http/operations/wix-rest-universal.json`

## Routing Targets (No Duplicated Operations)

Route execution to the most relevant domain integration:

- account scope: `tools/integrations/wix-account-level.md`
- business settings: `tools/integrations/wix-business-management.md`
- analytics: `tools/integrations/wix-analytics.md`
- email marketing: `tools/integrations/wix-email-marketing.md`
- site search: `tools/integrations/wix-site-search.md`
- site urls: `tools/integrations/wix-site-urls.md`
- stores: `tools/integrations/wix-stores.md`
- bookings: `tools/integrations/wix-bookings.md`
- cms: `tools/integrations/wix-cms.md`
- crm: `tools/integrations/wix-crm.md`
- assets/media: `tools/integrations/wix-assets.md`
- app scope: `tools/integrations/wix-app-management.md`
- site scope: `tools/integrations/wix-site-api.md`
- auth/query/platform guidance: `tools/integrations/wix-rest-articles.md`

## Discovery Flow (for missing operations)

1. Confirm request intent and target API family.
2. Pick target domain from `tools/REGISTRY.md`.
3. Use Wix REST API reference to find the target method article.
4. Confirm method endpoint and schema from docs.
5. Add the operation to that domain's `tools/http/operations/*.json`.
