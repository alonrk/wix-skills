# Task 004: Actionable Wix API Playbooks

## Plan

Convert `tools/integrations` from link-based references into executable playbooks that contain:
- concrete REST endpoints
- HTTP methods
- required request/query fields
- MCP tool mapping (`ManageWixSite`, `CallWixSiteAPI`)
- copyable call templates and operation steps

Also update skills so they explicitly execute actions from these playbooks.

## Decisions

- `tools/integrations` is treated as the first-class operational layer.
- Main API docs are still used for verification/fallback, but the default workflow should not require opening docs for known operations.
- Skills should reference operation playbooks directly by tool name and operation title.

## Execution Notes

- Created actionable playbooks with concrete endpoints and MCP templates:
  - `tools/integrations/wix-sites.md`
  - `tools/integrations/wix-domains.md`
  - `tools/integrations/wix-site-properties.md`
- Updated `tools/REGISTRY.md` from descriptive index to operational routing layer with operation coverage.
- Updated skills to execute through playbooks first:
  - `skills/wix-sites-management/SKILL.md`
  - `skills/wix-project-context/SKILL.md`
- Updated shared guidance to enforce playbook-first execution:
  - `AGENTS.md`
  - `README.md`
  - `CONTRIBUTING.md`
- Added operation details sourced from Wix method examples, including exact REST URLs and request templates.

## Validation Notes

- Ran `bash validate-skills.sh`.
- Result: `Validation passed.`
- Sanity checks:
  - `tools/REGISTRY.md` operation coverage matches available integration files.
  - Integration files include endpoint + method + MCP template sections.

## Follow-Up

- Apply the same playbook depth to Stores, Bookings, CMS, and Platform integrations.
