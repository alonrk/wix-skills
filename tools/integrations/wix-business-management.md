# Wix Business Management

Actionable playbook for business-management APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-management`

## Operation Registry

- `tools/http/operations/wix-business-management.json`

## Operation Cards

### 1) Get Installed Apps

- **Operation id**: `wix-business-management.get-installed-apps`
- **HTTP**: `GET https://www.wixapis.com/apps-installer-service/v1/app-instances`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-business-management.get-installed-apps
```

### 2) List Locations

- **Operation id**: `wix-business-management.list-locations`
- **HTTP**: `GET https://www.wixapis.com/locations/v1/locations`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-business-management.list-locations
```

### 3) Get Site Properties

- **Operation id**: `wix-business-management.get-site-properties`
- **HTTP**: `GET https://www.wixapis.com/site-properties/v4/properties`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-business-management.get-site-properties
```
