---
name: wix-crm-management
description: Manages Wix CRM APIs including contacts, labels, forms, and member-contact related operations. Use when requests involve customer records, segmentation, and CRM workflows.
---

# Wix CRM Management

## Use This Skill When

- The request targets contacts, labels, CRM communication entities, or member-contact data.
- The user asks to query, segment, or update CRM records.
- The workflow is customer/relationship centric.

## Primary Flow

1. Open `tools/integrations/wix-crm.md`.
2. Select operation id for the requested action.
3. Execute via `tools/http/wix-request.js`.
4. Add missing operations to:
   - `tools/http/operations/wix-crm.json`

## Integration Playbook

- `tools/integrations/wix-crm.md`

## Guardrails

- Minimize PII exposure in outputs and logs.
- Use explicit filters/paging for broad list or query actions.
- Avoid destructive CRM mutations without confirmation.
