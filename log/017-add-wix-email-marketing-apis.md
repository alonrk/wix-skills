# Task 017: Add Wix Email Marketing APIs

## Plan

Add Wix Email Marketing API coverage using repository conventions:
- dedicated operation registry
- actionable integration playbook
- dedicated domain skill
- registry/routing/docs updates

## Decisions

- Create a dedicated `wix-email-marketing` domain to keep ownership clear.
- Start with high-value docs-backed methods:
  - list campaigns
  - publish campaign
  - list campaign statistics
  - list sender emails
- Keep strict domain ownership so email marketing operations are not duplicated in broad domains.

## Execution Notes

- Added operation registry:
  - `tools/http/operations/wix-email-marketing.json`
- Added integration playbook:
  - `tools/integrations/wix-email-marketing.md`
- Added skill:
  - `skills/wix-email-marketing-management/SKILL.md`
- Updated routing/docs:
  - `tools/REGISTRY.md`
  - `tools/integrations/wix-rest-universal.md`
  - `tools/integrations/wix-business-management.md`
  - `README.md`
  - `AGENTS.md`
  - `skills/_templates/wix-skill-catalog.md`
  - `skills/wix-project-context/SKILL.md`

## Validation Notes

- Ran duplicate scan across `tools/http/operations/*.json` by method+URL.
- Ran `bash validate-skills.sh`.
- Ran dry-runs for the new operation ids.
- Ran lint diagnostics for edited files.
