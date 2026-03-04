# Wix Skill Catalog Mapping

This file tracks source-to-skill mapping before authoring or updating a skill.

| skill | when to use | main API doc source | key API areas | app/dependency notes |
| --- | --- | --- | --- | --- |
| wix-sites-management | site lifecycle, domains, site properties | https://dev.wix.com/docs/api-reference/account-level/sites/sites/introduction | Sites, Site Properties, Domains | may require domain-related permissions |
| wix-stores-management | products, variants, categories | https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/create-product | Catalog, Inventory, Categories | Stores app installed |
| wix-bookings-management | services, staff, hours | https://dev.wix.com/docs/api-reference/business-solutions/bookings/services/services-v2/create-service | Bookings Services, Staff, Calendar Events | Bookings app installed |
| wix-cms-management | collection schema and data | https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/introduction | Wix Data items, collections, references | CMS permissions/scopes |
| wix-project-context | collect account/site IDs and prerequisites | https://dev.wix.com/docs/api-reference/business-management/app-installation/get-installed-apps | sites, apps, prerequisites | none |
| wix-account-level-management | account-level assets, users, and domains | https://dev.wix.com/docs/api-reference/account-level | sites, domains, user management | account-level permissions |
| wix-business-management | business settings and platform operations | https://dev.wix.com/docs/api-reference/business-management | locations, site properties, app installation | business-management scopes |
| wix-analytics-management | site analytics reporting and metrics retrieval | https://dev.wix.com/docs/api-reference/business-management/analytics/introduction | analytics data, measurement types, date ranges | site analytics read scope |
| wix-email-marketing-management | email campaign operations and sender management | https://dev.wix.com/docs/api-reference/business-management/marketing/emails | campaigns, sender emails, campaign statistics | email marketing scopes and active account |
| wix-business-solutions-management | cross-vertical business solution tasks | https://dev.wix.com/docs/api-reference/business-solutions | stores, bookings, cms, events, plans | solution-specific app dependencies |
| wix-crm-management | contacts and CRM workflows | https://dev.wix.com/docs/api-reference/crm | contacts, labels, communication | crm scopes |
| wix-assets-management | media and assets operations | https://dev.wix.com/docs/api-reference/assets | files, imports, media manager | assets/media scopes |
| wix-app-management | app runtime and lifecycle operations | https://dev.wix.com/docs/api-reference/app-management | app instance, site plugins | app-auth requirements |
| wix-site-api-management | site-scoped operational APIs | https://dev.wix.com/docs/api-reference/site | contributors, site-level context | site scope required |
| wix-rest-articles-guidance | auth/query/platform guidance | https://dev.wix.com/docs/api-reference/articles | authentication, paging, troubleshooting | guidance skill, not entity CRUD |
