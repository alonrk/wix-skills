# Wix Tools Registry

Operational index for Wix REST API coverage across all major domains.

## How Agents Use This

1. Identify the API family from user intent.
2. Open the matching guide under `tools/integrations/`.
3. For known operations, run direct REST via `tools/http/wix-request.js`.
4. For uncovered operations, discover method details in Wix REST docs, then add a new operation card and registry entry.

## Tool Index

| Tool | Category | API | CLI | SDK | Guide |
| --- | --- | :---: | :---: | :---: | --- |
| wix-rest-universal | Cross-domain REST orchestration | ✓ | ✓ | ✓ | [wix-rest-universal.md](integrations/wix-rest-universal.md) |
| wix-account-level | Account-level APIs | ✓ | ✓ | ✓ | [wix-account-level.md](integrations/wix-account-level.md) |
| wix-business-management | Business Management APIs | ✓ | ✓ | ✓ | [wix-business-management.md](integrations/wix-business-management.md) |
| wix-analytics | Analytics APIs | ✓ | ✓ | ✓ | [wix-analytics.md](integrations/wix-analytics.md) |
| wix-email-marketing | Email Marketing APIs | ✓ | ✓ | ✓ | [wix-email-marketing.md](integrations/wix-email-marketing.md) |
| wix-site-search | Site Search APIs | ✓ | ✓ | ✓ | [wix-site-search.md](integrations/wix-site-search.md) |
| wix-site-urls | Site URLs APIs | ✓ | ✓ | ✓ | [wix-site-urls.md](integrations/wix-site-urls.md) |
| wix-business-solutions | Business Solutions APIs | ✓ | ✓ | ✓ | [wix-business-solutions.md](integrations/wix-business-solutions.md) |
| wix-crm | CRM APIs | ✓ | ✓ | ✓ | [wix-crm.md](integrations/wix-crm.md) |
| wix-assets | Assets APIs | ✓ | ✓ | ✓ | [wix-assets.md](integrations/wix-assets.md) |
| wix-app-management | App Management APIs | ✓ | ✓ | ✓ | [wix-app-management.md](integrations/wix-app-management.md) |
| wix-site-api | Site APIs | ✓ | ✓ | ✓ | [wix-site-api.md](integrations/wix-site-api.md) |
| wix-rest-articles | Auth/query/platform guidance | ✓ | - | ✓ | [wix-rest-articles.md](integrations/wix-rest-articles.md) |
| wix-stores | Stores operations | ✓ | ✓ | ✓ | [wix-stores.md](integrations/wix-stores.md) |
| wix-bookings | Bookings operations | ✓ | ✓ | ✓ | [wix-bookings.md](integrations/wix-bookings.md) |
| wix-cms | CMS operations | ✓ | ✓ | ✓ | [wix-cms.md](integrations/wix-cms.md) |
| wix-sites | Sites operations | ✓ | ✓ | ✓ | [wix-sites.md](integrations/wix-sites.md) |
| wix-domains | Domains operations | ✓ | ✓ | ✓ | [wix-domains.md](integrations/wix-domains.md) |
| wix-site-properties | Site Properties operations | ✓ | ✓ | ✓ | [wix-site-properties.md](integrations/wix-site-properties.md) |

## Covered Top-Level Wix REST Families

- Articles
- App Management
- Business Solutions
- Assets
- CRM
- Business Management
- Analytics
- Marketing (Emails)
- Site Search
- Site URLs
- Account Level
- Site

## Direct Runtime

- Auth resolver: `tools/http/wix-auth.js`
- Request runner: `tools/http/wix-request.js`
- Operation registries:
  - `tools/http/operations/wix-sites.json`
  - `tools/http/operations/wix-domains.json`
  - `tools/http/operations/wix-site-properties.json`
  - `tools/http/operations/wix-rest-universal.json`
  - `tools/http/operations/wix-account-level.json`
  - `tools/http/operations/wix-business-management.json`
  - `tools/http/operations/wix-analytics.json`
  - `tools/http/operations/wix-email-marketing.json`
  - `tools/http/operations/wix-site-search.json`
  - `tools/http/operations/wix-site-urls.json`
  - `tools/http/operations/wix-business-solutions.json`
  - `tools/http/operations/wix-crm.json`
  - `tools/http/operations/wix-assets.json`
  - `tools/http/operations/wix-app-management.json`
  - `tools/http/operations/wix-site-api.json`
  - `tools/http/operations/wix-rest-articles.json`
  - `tools/http/operations/wix-stores.json`
  - `tools/http/operations/wix-bookings.json`
  - `tools/http/operations/wix-cms.json`

## Selection Rules

- Start with `wix-rest-universal` when intent spans multiple domains.
- Use domain guides to pick the right API family and endpoint discovery route.
- If no `siteId` is available for site-level operations, run `skills/wix-project-context` first.
