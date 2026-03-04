# Wix Skills

Agent Skills for Wix workflows, built from main Wix REST API documentation and direct REST execution flows.

## What This Repository Contains

- A reusable structure for authoring Wix-focused Agent Skills
- A foundation skill pack for common Wix management operations
- Templates and checklists to keep new skills spec-compliant
- A simple validation script for structural and frontmatter checks

## Repository Layout

- `skills/` - all skills, one directory per skill
- `skills/_templates/` - authoring template and quality checklist
- `tools/` - integration registry and per-domain API guides
- `tools/http/` - direct REST auth and request runner scripts
- `log/` - numbered task logs with plan, decisions, and execution notes
- `validate-skills.sh` - lightweight local validation

## Available Skills

| Skill | Purpose |
| --- | --- |
| `wix-project-context` | Captures account/site context before management operations |
| `wix-account-level-management` | Account-level sites, domains, and team/user management |
| `wix-business-management` | Business platform settings such as locations and site properties |
| `wix-analytics-management` | Site analytics and reporting data retrieval |
| `wix-email-marketing-management` | Email campaigns, sender emails, and campaign statistics |
| `wix-business-solutions-management` | Cross-vertical business solutions operations |
| `wix-crm-management` | Contacts, labels, and CRM-centric operations |
| `wix-assets-management` | Media and assets operations |
| `wix-app-management` | App instance and plugin placement operations |
| `wix-site-api-management` | Site-scoped operational APIs |
| `wix-rest-articles-guidance` | Cross-cutting auth/query/troubleshooting guidance |
| `wix-sites-management` | Site lifecycle and configuration management tasks |
| `wix-stores-management` | Stores catalog and product management tasks |
| `wix-bookings-management` | Booking services and staff operations |
| `wix-cms-management` | CMS schema and data item operations |

## Usage

1. Pick the skill folder for the user request.
2. Follow the `SKILL.md` flow exactly.
3. For Wix API operations, start with the tools registry:
   1. `tools/REGISTRY.md` to select integration domain
   2. `tools/integrations/*.md` for endpoint-level operation cards and operation ids
4. Execute direct REST by default:
   1. `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`
   2. auth resolves automatically: signed instance -> OAuth -> API key
5. Use docs search/schema flow only when a required operation is not in playbooks.

## Add a New Skill

1. Copy `skills/_templates/SKILL.md` into a new `skills/<skill-name>/SKILL.md`.
2. Replace placeholders and verify frontmatter constraints.
3. Ensure flow enforces docs-derived endpoint/body usage (no guessing).
4. Run:

```bash
bash validate-skills.sh
```

## References

- Agent Skills specification: https://agentskills.io/specification.md
- Wix REST API reference: https://dev.wix.com/docs/api-reference
