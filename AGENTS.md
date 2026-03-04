# AGENTS

## Purpose

This repository is for Wix-specific Agent Skills. Each skill should produce consistent direct REST behavior with minimal ambiguity.

## Activation Guidance

Activate a skill when the user intent clearly matches its domain:
- `wix-account-level-management`: account-level sites, domains, teams, and ownership scope
- `wix-business-management`: business settings such as locations and site properties
- `wix-business-solutions-management`: cross-vertical solution operations
- `wix-crm-management`: contacts, labels, forms, and CRM-centric operations
- `wix-assets-management`: media/asset import and retrieval operations
- `wix-app-management`: app instance and app plugin operations
- `wix-site-api-management`: site-scoped operational APIs
- `wix-rest-articles-guidance`: auth/query/platform guidance tasks
- `wix-sites-management`: site setup, templates, domains, site properties
- `wix-stores-management`: products, variants, categories, catalog operations
- `wix-bookings-management`: services, staff, hours, booking setup
- `wix-cms-management`: collections, fields, data CRUD, references
- `wix-project-context`: gather missing account/site context before execution

## Required Direct REST Flow

1. Start with `tools/REGISTRY.md` to choose the correct Wix integration guide.
2. Read the selected guide in `tools/integrations/` and execute an operation card directly.
3. Execute with `node tools/http/wix-request.js --operation <id> --params '{...}' --body '{...}'`.
4. Let auth resolve in order: signed instance -> OAuth -> API key.
5. Use docs search and schema retrieval only when a required operation is missing from playbooks.

## Guardrails

- Do not guess API endpoints or request bodies.
- Prefer playbook-defined endpoint and body templates before ad hoc docs exploration.
- Prefer direct REST scripts for all operations.
- Respect app-install and Wix Code enablement error handling paths.
- Keep responses action-oriented and complete the task end-to-end when possible.
