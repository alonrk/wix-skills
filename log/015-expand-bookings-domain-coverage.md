# Task 015: Expand Bookings Domain Coverage

## Plan

Deepen bookings-domain coverage with additional service, staff, availability, and booking lifecycle operations under `wix-bookings`.

## Decisions

- Keep all new bookings operations in `tools/http/operations/wix-bookings.json`.
- Expand `tools/integrations/wix-bookings.md` with operation cards matching each new operation id.
- Preserve strict domain ownership and avoid cross-domain duplication.

## Execution Notes

- Expanded bookings operation registry with additional docs-backed methods:
  - `wix-bookings.get-service`
  - `wix-bookings.update-service`
  - `wix-bookings.query-staff-members`
  - `wix-bookings.create-staff-member`
  - `wix-bookings.delete-staff-member`
  - `wix-bookings.list-availability-time-slots`
  - `wix-bookings.get-availability-time-slot`
  - `wix-bookings.create-booking`
  - `wix-bookings.bulk-create-booking`
- Updated bookings integration playbook with matching operation cards and run commands:
  - `tools/integrations/wix-bookings.md`

## Validation Notes

- Duplicate scan across all registries by method+URL:
  - result: `NO_DUPLICATES`
- Ran `bash validate-skills.sh` -> `Validation passed.`
- Dry-run checks passed for newly added bookings operations:
  - `wix-bookings.get-service`
  - `wix-bookings.update-service`
  - `wix-bookings.query-staff-members`
  - `wix-bookings.create-staff-member`
  - `wix-bookings.delete-staff-member`
  - `wix-bookings.list-availability-time-slots`
  - `wix-bookings.get-availability-time-slot`
  - `wix-bookings.create-booking`
  - `wix-bookings.bulk-create-booking`
- Lint check on edited files -> no errors.
