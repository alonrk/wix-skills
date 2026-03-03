# Wix Assets

Actionable playbook for assets/media APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/assets`

## Operation Registry

- `tools/http/operations/wix-assets.json`

## Operation Cards

### 1) List Files

- **Operation id**: `wix-assets.list-files`
- **HTTP**: `GET https://www.wixapis.com/site-media/v1/files`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-assets.list-files
```

### 2) Import File

- **Operation id**: `wix-assets.import-file`
- **HTTP**: `POST https://www.wixapis.com/site-media/v1/files/import`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-assets.import-file --body '{"url":"https://example.com/banner.jpg","displayName":"banner.jpg"}'
```
