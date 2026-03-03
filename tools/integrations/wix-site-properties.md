# Wix Site Properties

Actionable playbook for reading and updating site business properties via direct REST scripts.

## Capabilities

| Integration | Available | Notes |
| --- | --- | --- |
| API | ✓ | Site Properties v4 endpoints |
| MCP | ✓ | Fallback only |
| CLI | - | Not implemented |
| SDK | ✓ | Optional outside MCP |

## Auth Modes

- Preferred order: signed instance -> OAuth -> API key.
- Site-level context required (`WIX_SITE_ID` recommended for direct calls).

## Operation Cards

### 1) Get Site Properties Snapshot

- **HTTP**: `GET https://www.wixapis.com/site-properties/v4/properties`
- **Operation id**: `wix-site-properties.get-site-properties`
- **Use when**: read current locale/business/contact/schedule snapshot.
- **Optional query params**:
  - `fields.paths=<path>` repeated for field projection

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-site-properties.get-site-properties
```

### 2) Update Business Profile

- **HTTP**: `POST https://www.wixapis.com/site-properties/v4/properties/business-profile`
- **Operation id**: `wix-site-properties.update-business-profile`
- **Use when**: update display name/business name/logo/description.
- **Body template**:

```json
{
  "businessProfile": {
    "siteDisplayName": "My Site Display Name",
    "businessName": "My Business Name",
    "logo": "logo-file.jpg",
    "description": "Business description"
  },
  "fields": {
    "paths": ["siteDisplayName", "businessName", "logo", "description"]
  }
}
```

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-site-properties.update-business-profile --body '{"businessProfile":{"siteDisplayName":"My Site Display Name"},"fields":{"paths":["siteDisplayName"]}}'
```

### 3) Update Business Contact

- **HTTP**: `POST https://www.wixapis.com/site-properties/v4/properties/business-contact`
- **Operation id**: `wix-site-properties.update-business-contact`
- **Use when**: update email/phone/fax/address.
- **Body template**:

```json
{
  "businessContact": {
    "email": "useremail@domain.com",
    "phone": "+18008000000",
    "fax": "12345678",
    "address": {
      "city": "New York",
      "country": "US",
      "state": "NY",
      "zip": "10036"
    }
  },
  "fields": {
    "paths": ["email", "phone", "fax", "address"]
  }
}
```

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-site-properties.update-business-contact --body '{"businessContact":{"phone":"+18008000000"},"fields":{"paths":["phone"]}}'
```

### 4) Update Business Schedule

- **HTTP**: `POST https://www.wixapis.com/site-properties/v4/properties/business-schedule`
- **Operation id**: `wix-site-properties.update-business-schedule`
- **Use when**: set operating hours/special closures.
- **Important**: this overwrites the full schedule array.
- **Body template**:

```json
{
  "businessSchedule": {
    "periods": [
      {
        "openDay": "MONDAY",
        "openTime": "10:00",
        "closeDay": "MONDAY",
        "closeTime": "18:00"
      }
    ],
    "specialHourPeriod": [
      {
        "startDate": "2026-12-24T00:00:00Z",
        "endDate": "2026-12-24T23:59:59Z",
        "isClosed": true,
        "comment": "Closed for holiday"
      }
    ]
  }
}
```

- **Run**:

```bash
node tools/http/wix-request.js --operation wix-site-properties.update-business-schedule --body '{"businessSchedule":{"periods":[{"openDay":"MONDAY","openTime":"10:00","closeDay":"MONDAY","closeTime":"18:00"}],"specialHourPeriod":[]}}'
```

## MCP Fallback (Last Resort)

If direct REST fails due to identity or policy constraints, use `CallWixSiteAPI` for equivalent endpoint and body.

## Guardrails

- Never invent field paths or nested schemas.
- Send only user-requested updates.
- For schedule updates, read current state first when partial edits are requested.

## Relevant Skills

- `skills/wix-sites-management/SKILL.md`
- `skills/wix-project-context/SKILL.md`
