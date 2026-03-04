---
name: wix-rest-articles-guidance
description: Handles cross-cutting Wix REST API foundations such as authentication, query semantics, sorting, paging, and troubleshooting guidance. Use when requests are about platform rules rather than a single entity domain.
---

# Wix REST Articles Guidance

## Use This Skill When

- The request is about authentication flow, token handling, paging/filtering semantics, or API troubleshooting.
- A domain skill requires platform-level behavior clarification before execution.
- The task maps to cross-cutting REST guidance content.

## Primary Flow

1. Open `tools/integrations/wix-rest-articles.md`.
2. Use the operation cards for executable baseline checks.
3. Apply guidance to the domain-specific operation execution path.
4. Add missing baseline operations to:
   - `tools/http/operations/wix-rest-articles.json`

## Integration Playbook

- `tools/integrations/wix-rest-articles.md`

## Guardrails

- Keep this skill for platform guidance, not business-entity mutations.
- Use it to unblock domain skills, then return execution to the domain skill.
- Avoid mixing guidance-only tasks with unrelated CRUD operations.
