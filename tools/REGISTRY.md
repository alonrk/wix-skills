# Wix Tools Registry

Operational index for direct Wix REST execution. Choose an integration guide and run operation playbooks with `tools/http/wix-request.js`.

## How Agents Use This

1. Identify intent and pick one tool below.
2. Open its integration playbook in `tools/integrations/`.
3. Execute the matching operation id with:
   - `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`
4. Use MCP only as fallback when operation coverage or auth constraints block direct REST.

## Tool Index

| Tool | Category | API | MCP | CLI | SDK | Guide |
| --- | --- | :---: | :---: | :---: | :---: | --- |
| wix-sites | Sites | ✓ | ✓ | - | ✓ | [wix-sites.md](integrations/wix-sites.md) |
| wix-domains | Domains | ✓ | ✓ | - | ✓ | [wix-domains.md](integrations/wix-domains.md) |
| wix-site-properties | Business Management | ✓ | ✓ | - | ✓ | [wix-site-properties.md](integrations/wix-site-properties.md) |

## Direct Runtime

- Auth resolver: `tools/http/wix-auth.js`
- Request runner: `tools/http/wix-request.js`
- Operation registries:
  - `tools/http/operations/wix-sites.json`
  - `tools/http/operations/wix-domains.json`
  - `tools/http/operations/wix-site-properties.json`

## Operation Coverage

### wix-sites

- Query sites
- Count sites
- Search templates
- Create site from template
- Publish site

### wix-domains

- Suggest domains
- Check domain availability

### wix-site-properties

- Get site properties snapshot
- Update business profile
- Update business contact
- Update business schedule

## Tool Selection Rules

- Use `wix-sites` for account-level site inventory and site lifecycle operations.
- Use `wix-domains` for domain discovery and availability checks.
- Use `wix-site-properties` for business profile/contact/schedule reads and writes.
- If no `siteId` is available for site-level operations, resolve it first with `skills/wix-project-context`.
