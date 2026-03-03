# Wix Domains

Actionable playbook for Wix domain discovery and availability checks via direct REST scripts.

## Capabilities

| Integration | Available | Notes |
| --- | --- | --- |
| API | ✓ | Domain Search API methods |
| CLI | - | Not implemented |
| SDK | ✓ | Optional |

## Auth Modes

- Domain search endpoints require API key mode.
- Signed instance/OAuth should fall through to API key for these operation ids.

## Operation Cards

### 1) Suggest Domains

- **HTTP**: `GET https://www.wixapis.com/domain-search/v2/suggest-domains`
- **Operation id**: `wix-domains.suggest-domains`
- **Use when**: generate candidate domains from keywords.
- **Required query params**:
  - `query` (example: `my stunning domain`)
- **Optional query params**:
  - `paging.limit` (example: `4`)
  - `tlds` (repeat param, example: `com`, `love`)

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-domains.suggest-domains --params '{"query":"my stunning domain","limit":4,"tld":"com"}'
```

### 2) Check Domain Availability

- **HTTP**: `GET https://www.wixapis.com/domain-search/v2/check-domain-availability`
- **Operation id**: `wix-domains.check-availability`
- **Use when**: verify if a specific domain can be purchased.
- **Required query params**:
  - `domain` including TLD (example: `mydomain.com`)

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-domains.check-availability --params '{"domain":"mydomain.com"}'
```

### 3) Handle Domain Search Errors

- **Use when**: domain APIs return validation/availability errors.
- **Action**:
  - verify TLD format and domain format,
  - retry with cleaned query/domain,
  - return explicit reason if unavailable.

## Guardrails

- Always run availability checks before proposing purchase flow.
- Do not claim availability from suggestion results alone.
- Keep all domain actions in account-level context.

## Relevant Skills

- `skills/wix-sites-management/SKILL.md`
- `skills/wix-project-context/SKILL.md`
