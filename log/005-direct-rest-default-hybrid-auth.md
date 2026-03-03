# Task 005: Direct REST Default with Hybrid Auth

## Plan

Make direct Wix REST execution the default behavior in this repo by adding an HTTP execution layer that does not depend on external tool wrappers.

Hybrid auth order:
1. Signed instance
2. OAuth access token
3. API key
4. extend operation registries when direct REST coverage is missing

## Decisions

- Add executable scripts under `tools/http/`.
- Encode supported operations in JSON registries under `tools/http/operations/`.
- Update integration playbooks and skills to use scripts by default.
- Keep direct REST as the only execution path.

## Execution Notes

- Added direct runtime scripts:
  - `tools/http/wix-auth.js`
  - `tools/http/wix-request.js`
  - `tools/http/README.md`
- Added operation registries:
  - `tools/http/operations/wix-sites.json`
  - `tools/http/operations/wix-domains.json`
  - `tools/http/operations/wix-site-properties.json`
- Updated playbooks to script-first execution and explicit operation ids:
  - `tools/REGISTRY.md`
  - `tools/integrations/wix-sites.md`
  - `tools/integrations/wix-domains.md`
  - `tools/integrations/wix-site-properties.md`
- Updated skill/system guidance to default to direct REST:
  - `skills/wix-sites-management/SKILL.md`
  - `skills/wix-project-context/SKILL.md`
  - `AGENTS.md`
  - `README.md`
  - `CONTRIBUTING.md`
- Marked runtime scripts executable.

## Validation Notes

- Ran `bash validate-skills.sh` -> `Validation passed.`
- Auth resolution smoke checks:
  - no credentials -> `mode: null` (expected fail)
  - `WIX_SIGNED_INSTANCE` -> `mode: signed_instance`
  - `WIX_OAUTH_ACCESS_TOKEN` -> `mode: oauth`
  - `WIX_API_KEY` -> `mode: api_key`
- Dry-run operation checks:
  - `wix-sites.query-sites` -> resolved request with oauth header
  - `wix-domains.check-availability` -> resolved request with apiKey auth
  - `wix-site-properties.get-site-properties` -> resolved request with signed instance headers
- Schema guard check:
  - `wix-domains.check-availability` without `domain` -> `Missing required params: domain` (expected)

## Follow-Up

- Extend direct REST operation registries to Stores, Bookings, CMS, and Platform.
