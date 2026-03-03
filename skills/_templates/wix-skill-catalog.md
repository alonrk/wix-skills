# Wix Skill Catalog Mapping

This file tracks source-to-skill mapping before authoring or updating a skill.

| skill | when to use | main API doc source | key API areas | app/dependency notes |
| --- | --- | --- | --- | --- |
| wix-sites-management | site lifecycle, domains, site properties | https://dev.wix.com/docs/api-reference/account-level/sites/sites/introduction | Sites, Site Properties, Domains | may require domain-related permissions |
| wix-stores-management | products, variants, categories | https://dev.wix.com/docs/api-reference/business-solutions/stores/catalog-v3/products-v3/create-product | Catalog, Inventory, Categories | Stores app installed |
| wix-bookings-management | services, staff, hours | https://dev.wix.com/docs/api-reference/business-solutions/bookings/services/services-v2/create-service | Bookings Services, Staff, Calendar Events | Bookings app installed |
| wix-cms-management | collection schema and data | https://dev.wix.com/docs/api-reference/business-solutions/cms/data-items/introduction | Wix Data items, collections, references | CMS permissions/scopes |
| wix-project-context | collect account/site IDs and prerequisites | https://dev.wix.com/docs/api-reference/business-management/app-installation/get-installed-apps | sites, apps, prerequisites | none |
