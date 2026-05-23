# About Ngaturduit

A Telegram-first personal finance app for capturing daily money flow, organizing it across wallets, and turning it into reports and AI-assisted conversations.

## What It Does

- **Capture transactions from Telegram** — log income and expenses through a chat bot, no separate app to open.
- **Organize across wallets** — group balances by account, with money transfers between wallets recorded as linked transaction pairs.
- **Aggregate automatically** — daily and monthly summaries with per-category income/expense breakdowns ready for review.
- **Generate PDF reports** — server-rendered reports via WeasyPrint for sharing or archiving.
- **Talk to your data** — chat-based conversations powered by the OpenAI Agents SDK, plus an authenticated MCP endpoint so external AI tools can query the same data.

## Who It For

Telegram-centric users who want friction-free transaction logging — type a message, the bot records it. A web dashboard and a React SPA exist for users who want a richer view of the same data on a larger screen.

## How It Works

The Telegram bot is the primary capture surface — users record transactions in chat and the bot persists them to a Django backend keyed by `telegram_id`. The same data is browsable through two parallel surfaces: a server-rendered Django dashboard (with Tailwind templates) and a standalone React SPA that consumes the REST API. AI features layer on top: in-app conversations use the OpenAI Agents SDK, and an authenticated MCP endpoint exposes the same operations to external assistants.

## Surfaces

| Surface | Path | Purpose |
|---|---|---|
| Telegram bot | `apps/telegram_bot` | Primary transaction capture |
| Django dashboard | `/dashboard/`, `/wallets/`, `/transactions/`, `/conversations/` | Server-rendered web UI |
| React SPA | `frontend/` (Vite, port 3000) | Standalone single-page app |
| REST API v1 | `/api/v1/` | auth, profile, transactions, wallets, daily/monthly |
| REST API v2 | `/api/v2/` | slimmer profile + transaction rewrite |
| MCP endpoint | `/mcp/mcp` | Authenticated tool integrations |
| PDF reports | via `apps/profiles` | WeasyPrint-generated reports |

## Tech Summary

- **Backend** — Django 5.2 + DRF, PostgreSQL, Celery + Redis, WeasyPrint, WhiteNoise, django-allauth (Google OAuth), Sentry, Langfuse.
- **AI** — OpenAI Agents SDK, authenticated MCP via `core.views.AuthenticatedMCPView`.
- **Bot** — `python-telegram-bot`, runs as its own service via `manage.py run_telegram_bot`.
- **Frontend** — Vite + React 19 + TypeScript SPA (TanStack Query, Jotai, react-router v7, shadcn/radix, `ky`); Tailwind v4 for Django templates.
- **Tooling** — `uv` (Python 3.12+), `pnpm`, `ruff`, `djlint`.

For setup, environment variables, and run commands, see [README.md](README.md). For codebase conventions and architectural notes, see [CLAUDE.md](CLAUDE.md).

## License

MIT.
