# Contributing

## Principles

- Keep skills narrowly scoped by Wix domain/use case.
- Follow Agent Skills spec frontmatter rules.
- Encode deterministic execution flow, not generic advice.
- Prefer direct REST script-first flow.
- Keep `tools/REGISTRY.md` and `tools/integrations/*.md` in sync with skill behavior.
- Write integration guides as executable playbooks (endpoint, method, request template, direct script command).

## Skill Authoring Rules

1. Directory name must match `name` in frontmatter.
2. `name` must be lowercase letters, numbers, and hyphens only.
3. `description` must explain both what the skill does and when to use it.
4. Include explicit direct REST sequence and fallback path.
5. Never invent API URLs or request body schema.
6. Keep `SKILL.md` concise; move deep detail into references when needed.

## Required Process For Major Tasks

1. Review existing files in `log/`.
2. Create a new numbered log file in `log/` for each major task.
3. Record plan, decisions, execution notes, validation, and follow-up.

## Pull Request Checklist

- [ ] Skill folder and frontmatter name match
- [ ] Description includes "what" and "when"
- [ ] Flow includes direct REST script-first behavior and fallback order
- [ ] Source docs URLs are included where relevant
- [ ] Tools registry entries match integration files and naming
- [ ] `bash validate-skills.sh` passes
- [ ] Task log updated under `log/`
