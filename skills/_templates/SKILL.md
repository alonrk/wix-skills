---
name: example-skill-name
description: Describe what this Wix skill does and when to use it.
---

# Skill Name

## Use This Skill When

- The user asks for:
  - <trigger 1>
  - <trigger 2>
- This domain is the best fit: <domain>

## Required Context

- `siteId` or a clear way to resolve the target site.
- Any required entity identifiers (for example product ID, collection ID, service ID).
- Confirmation of desired operation (create, update, query, delete).

## Execution Flow

1. Call `WixREADME` first.
2. Discover the main API method with `SearchWixRESTDocumentation` or `BrowseWixRESTDocsMenu`.
3. Read method article with `ReadFullDocsArticle`.
4. Use method code examples and endpoint URL from main API docs.
5. If still unclear, use `ReadFullDocsMethodSchema`.
6. Execute with `CallWixSiteAPI` using only docs/schema-derived fields.
7. Optionally consult recipe pages from `WixREADME` for orchestration patterns and edge cases.

## Guardrails

- Never guess API URL or request body schema.
- Do not use docs page URLs as API URLs.
- Handle missing app/Wix Code errors by installing/enabling as indicated by error.

## Common Errors and Handling

- Missing app installed:
  - Install relevant Wix app using documented recipe and retry.
- `WDE0110: Wix Code not enabled`:
  - Enable/install Wix Code per platform recipe and retry.
- Permissions/auth errors:
  - Return actionable remediation and stop retry loops.

## Sources

- Primary recipe URL(s): <url>
- Method docs URL(s): <url>
