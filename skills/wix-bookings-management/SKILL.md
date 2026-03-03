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

1. Locate Bookings methods in Wix REST API reference.
2. Add or select operation id in `tools/http/operations/`.
3. Execute via `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`.

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

## Guardrails

- Do not set business hours using wrong API families when recipe specifies calendar events.
- Keep service type assumptions explicit (`APPOINTMENT`, `CLASS`, `COURSE`) and docs-based.
- Never infer payment integration payloads without docs context.

## Error Handling

- Missing bookings app or related module:
  - Install/enable app and retry.
- Slot or scheduling conflicts:
  - Return conflict details and recommend retry windows/options.
