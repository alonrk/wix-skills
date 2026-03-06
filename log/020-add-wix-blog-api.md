# Task 020: Add Wix Blog API

## Plan

Add Wix Blog API coverage using repository conventions:
- dedicated operation registry
- actionable integration playbook
- dedicated domain skill
- routing/catalog updates

## Decisions

- Create dedicated `wix-blog` domain for blog posts, categories, and tags APIs.
- Start with docs-backed high-value methods:
  - list posts
  - get post
  - query posts
  - query categories
  - query tags
- Keep strict domain ownership so blog operations are not duplicated in broad domains.

## Execution Notes

- Added operation registry:
  - `tools/http/operations/wix-blog.json`
- Added integration playbook:
  - `tools/integrations/wix-blog.md`
- Added skill:
  - `skills/wix-blog-management/SKILL.md`
- Updated routing/docs:
  - `tools/REGISTRY.md`
  - `tools/integrations/wix-rest-universal.md`
  - `tools/integrations/wix-business-solutions.md`
  - `README.md`
  - `AGENTS.md`
  - `skills/_templates/wix-skill-catalog.md`
  - `skills/wix-project-context/SKILL.md`
  - `skills/wix-business-solutions-management/SKILL.md`

## Validation Notes

- Ran duplicate scan across `tools/http/operations/*.json` by method+URL.
- Ran `bash validate-skills.sh`.
- Ran dry-runs for blog operation ids.
- Ran lint diagnostics for edited files.
