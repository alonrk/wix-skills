# Wix Sites

Actionable playbook for Wix site operations. Use this file to execute site actions directly with `tools/http/wix-request.js` (MCP fallback only).

## Capabilities

| Integration | Available | Notes |
| --- | --- | --- |
| API | ✓ | Sites, templates, and site lifecycle endpoints |
| MCP | ✓ | Fallback only |
| CLI | - | Not implemented |
| SDK | ✓ | Optional outside MCP |

## Auth Modes

- Preferred: signed instance, then OAuth, then API key.
- Account-level site-list/template APIs typically require OAuth/API key.
- Site-level publishing requires site context (`WIX_SITE_ID` or explicit downstream context).

## Operation Cards

### 1) Query Sites

- **HTTP**: `POST https://www.wixapis.com/site-list/v2/sites/query`
- **Operation id**: `wix-sites.query-sites`
- **Use when**: list/filter/sort sites.
- **Body template**:

```json
{
  "query": {
    "filter": {
      "editorType": "EDITOR"
    },
    "sort": [
      {
        "fieldName": "createdDate",
        "order": "ASC"
      }
    ],
    "cursorPaging": {
      "limit": 50
    }
  }
}
```

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-sites.query-sites --body '{"query":{"cursorPaging":{"limit":50}}}'
```

### 2) Count Sites

- **HTTP**: `POST https://www.wixapis.com/site-list/v2/sites/count`
- **Operation id**: `wix-sites.count-sites`
- **Use when**: return total count for filters.
- **Body template**:

```json
{
  "filter": {
    "editorType": "EDITOR"
  }
}
```

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-sites.count-sites --body '{"filter":{"editorType":"EDITOR"}}'
```

### 3) Search Templates

- **HTTP**: `GET https://www.wix.com/_api/template-cms-view-service/view/v2/templates/search`
- **Operation id**: `wix-sites.search-templates`
- **Use when**: user needs template options before site creation.
- **Required query params**:
  - `language=en`
  - `limit=24`
  - `offset=0` (paginate by +24)
  - `bookType=studio` or `bookType=main-v2`
  - `query=<keyword+keyword>`

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-sites.search-templates --params '{"limit":24,"offset":0,"bookType":"main-v2","query":"yoga+studio"}'
```

### 4) Create Site From Template

- **HTTP**: `POST https://www.wixapis.com/msm/v1/meta-site/create-from-template`
- **Operation id**: `wix-sites.create-site-from-template`
- **Use when**: create new site from selected template.
- **Body template**:

```json
{
  "originTemplateId": "<templateMetaSiteId>",
  "siteName": "my_site_01"
}
```

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-sites.create-site-from-template --body '{"originTemplateId":"<templateMetaSiteId>","siteName":"my_site_01"}'
```

- **Notes**:
  - `siteName` must match `[a-z0-9_-]{4,20}`.
  - For headless, include `"namespace": "HEADLESS"`.

### 5) Publish Site

- **HTTP**: `POST https://www.wixapis.com/site-publisher/v1/site/publish`
- **Operation id**: `wix-sites.publish-site`
- **Use when**: publish a created/updated site after user confirmation.
- **Body template**:

```json
{}
```

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-sites.publish-site --body '{}'
```

## MCP Fallback (Last Resort)

Use only when direct REST is blocked by identity constraints or missing operation coverage.
- Account-level: `ManageWixSite`
- Site-level: `CallWixSiteAPI`

## Guardrails

- Do not run mutating site actions until target site/template is confirmed.
- Do not invent request body fields.
- Keep account-level and site-level tool usage separated.

## Relevant Skills

- `skills/wix-sites-management/SKILL.md`
- `skills/wix-project-context/SKILL.md`
