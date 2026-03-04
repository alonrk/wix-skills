---
name: wix-bookings-management
description: Manages Wix Bookings entities including services, staff, schedules, and booking-related integrations. Use when users need to configure booking operations or availability.
---

# Wix Bookings Management

## Use This Skill When

- The user asks to create or update booking services.
- The task involves staff setup, working hours, resource assignment, or booking payment flow integration.
- The user needs booking policy configuration (cancellation, waitlist, service policy).

## Primary Flow

1. Open `tools/integrations/wix-bookings.md`.
2. Select operation id for the requested bookings action.
3. Execute with:
   - `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`
4. Add missing operation coverage to:
   - `tools/http/operations/wix-bookings.json`

## Integration Playbook

- `tools/integrations/wix-bookings.md`

## Guardrails

- Do not set business hours using unrelated API families.
- Keep service type assumptions explicit (`APPOINTMENT`, `CLASS`, `COURSE`) and docs-based.
- Never infer payment integration payloads without docs context.

## Error Handling

- Missing bookings app or related module:
  - Install/enable app and retry.
- Slot or scheduling conflicts:
  - Return conflict details and recommend retry windows/options.
