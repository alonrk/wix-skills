# Wix Email Marketing

Actionable playbook for Wix Email Marketing APIs.

## Domain Root

- `https://dev.wix.com/docs/api-reference/business-management/marketing/emails`

## Operation Registry

- `tools/http/operations/wix-email-marketing.json`

## Operation Cards

### 1) List Campaigns

- **Operation id**: `wix-email-marketing.list-campaigns`
- **HTTP**: `GET https://www.wixapis.com/email-marketing/v1/campaigns`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-email-marketing.list-campaigns
```

### 2) Publish Campaign

- **Operation id**: `wix-email-marketing.publish-campaign`
- **HTTP**: `POST https://www.wixapis.com/email-marketing/v1/campaigns/{campaignId}/publish`
- **Run (landing page only)**:

```bash
node tools/http/wix-request.js --operation wix-email-marketing.publish-campaign --params '{"campaignId":"<campaign-guid>"}'
```

- **Run (send email distribution)**:

```bash
node tools/http/wix-request.js --operation wix-email-marketing.publish-campaign --params '{"campaignId":"<campaign-guid>"}' --body '{"emailDistributionOptions":{"emailSubject":"Monthly update","labelIds":["contacts-all"]}}'
```

### 3) List Campaign Statistics

- **Operation id**: `wix-email-marketing.list-statistics`
- **HTTP**: `GET https://www.wixapis.com/email-marketing/v1/campaigns/statistics?campaignIds=<campaign-guid>`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-email-marketing.list-statistics --params '{"campaignId":"<campaign-guid>"}'
```

### 4) List Sender Emails

- **Operation id**: `wix-email-marketing.list-sender-emails`
- **HTTP**: `GET https://www.wixapis.com/sender-emails/v1/sender-emails`
- **Run**:

```bash
node tools/http/wix-request.js --operation wix-email-marketing.list-sender-emails
```

## Guardrails

- Ensure Email Marketing account is active before campaign publishing actions.
- Use verified sender emails when sending campaigns.
- Publish operations are mutating; prefer listing campaigns first and confirm target campaign ID.
