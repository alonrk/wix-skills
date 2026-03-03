# Wix App Management

Actionable playbook for app-management APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/app-management`

## Operation Registry

- `tools/http/operations/wix-app-management.json`

## Operation Cards

### 1) Get App Instance

- **Operation id**: `wix-app-management.get-app-instance`
- **HTTP**: `GET https://www.wixapis.com/apps/v1/instance`
- **Auth notes**: authenticated as Wix app (OAuth).
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-app-management.get-app-instance
```

### 2) Get Site Plugin Placement Status

- **Operation id**: `wix-app-management.get-plugin-placement-status`
- **HTTP**: `GET https://www.wixapis.com/app-plugins/v1/site-plugins/placement-status`
- **Auth notes**: authenticated as Wix app (OAuth).
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-app-management.get-plugin-placement-status
```
