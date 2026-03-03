---
name: wix-bookings-management
description: Manages Wix Bookings entities including services, staff, schedules, and booking-related integrations. Use when users need to configure booking operations or availability.
---

# Wix Bookings Management

## Use This Skill When

- The user asks to create or update booking services.
- The task involves staff setup, working hours, resource assignment, or booking payment flow integration.
- The user needs booking policy configuration (cancellation, waitlist, service policy).

## Primary Flow (Main API Reference First)

1. Call `WixREADME`.
2. Locate Bookings methods via `SearchWixRESTDocumentation` or `BrowseWixRESTDocsMenu`.
3. Read method docs with `ReadFullDocsArticle`.
4. Execute via `CallWixSiteAPI` with docs-derived endpoint and body.

## Main API Docs Targets

- Services API:
  - https://dev.wix.com/docs/api-reference/business-solutions/bookings/services/services-v2/create-service
  - https://dev.wix.com/docs/api-reference/business-solutions/bookings/services/services-v2/bulk-create-services
- Staff Members API:
  - https://dev.wix.com/docs/api-reference/business-solutions/bookings/staff-members/staff-members/introduction
  - https://dev.wix.com/docs/api-reference/business-solutions/bookings/staff-members/staff-members/create-staff-member
- Bookings flow guidance:
  - https://dev.wix.com/docs/api-reference/business-solutions/bookings/flow-set-up-a-service
  - https://dev.wix.com/docs/api-reference/business-solutions/bookings/bookings/bookings-writer-v2/create-booking

## Optional Recipe Accelerators

- https://dev.wix.com/docs/picasso/wix-ai-docs/recipes-v2/manage/bookings/recipe-create-and-update-booking-services
- https://dev.wix.com/docs/picasso/wix-ai-docs/recipes-v2/manage/bookings/recipe-bookings-staff-setup
- https://dev.wix.com/docs/picasso/wix-ai-docs/recipes-v2/manage/bookings/recipe-configure-default-business-hours

## Guardrails

- Do not set business hours using wrong API families when recipe specifies calendar events.
- Keep service type assumptions explicit (`APPOINTMENT`, `CLASS`, `COURSE`) and docs-based.
- Never infer payment integration payloads without docs context.

## Error Handling

- Missing bookings app or related module:
  - Install/enable via platform recipe and retry.
- Slot or scheduling conflicts:
  - Return conflict details and recommend retry windows/options.
