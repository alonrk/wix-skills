# Task 019: Add Wix SEO APIs

## Plan

Add Wix SEO API coverage using repository conventions:
- dedicated operation registry
- actionable integration playbook
- dedicated domain skill
- routing/catalog updates

## Decisions

- Create dedicated `wix-seo` domain for SEO Tags API operations.
- Start with directly executable Wix REST SEO method:
  - `resolve-static-page-seo-tags`
- Keep strict domain ownership so SEO operations are not duplicated in broader domains.

## Execution Notes

- Added operation registry:
  - `tools/http/operations/wix-seo.json`
- Added integration playbook:
  - `tools/integrations/wix-seo.md`
- Added skill:
  - `skills/wix-seo-management/SKILL.md`
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
- Ran dry-run for:
  - `wix-seo.resolve-static-page-seo-tags`
- Ran lint diagnostics for edited files.
