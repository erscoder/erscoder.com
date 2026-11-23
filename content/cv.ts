// Single source of truth for the site copy. Every fact here comes from the CV (Nov 2026).

export const contact = {
  email: 'enrique.rubio.developer@gmail.com',
  links: [
    { label: 'GitHub', href: 'https://github.com/erscoder' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/enriquerubiosanchez/' },
    { label: 'X', href: 'https://twitter.com/kikerub' },
    { label: 'ErsLabs', href: 'https://erslabs.net' },
  ],
}

export const kpis = [
  { value: '740+', label: 'tickets delivered to production in 6 months' },
  { value: '725', label: 'invoices and credit notes issued automatically via ERP' },
  { value: '50+', label: 'AWS CloudFormation stacks, all infra as code' },
  { value: '32,000+', label: 'unit tests, plus 9,300+ end-to-end tests' },
]

export const platformScale = [
  { value: '32', label: 'brands' },
  { value: '240+', label: 'client companies' },
  { value: '1,300+', label: 'locations' },
  { value: '8,000+', label: 'users' },
]

export const vrandedWork = [
  {
    title: 'Turned around an inherited platform',
    figure: '108 verified findings',
    body: 'Audited the agency-built NestJS + Nuxt 4 codebase: 108 verified findings and 8 blockers, including SQL injection, cross-brand IDOR and plaintext OTPs. Set a 90-day remediation roadmap and took the platform from prototype quality to a release cadence of several production deploys per week.',
  },
  {
    title: 'Delivered across four codebases',
    figure: '~5,900 commits',
    body: '740+ tickets in six months across backend, frontend, courier microservice and public site, with production releases of up to 43 tickets at once.',
  },
  {
    title: 'Automated invoicing end to end with the Holded ERP',
    figure: '575 invoices, 150 credit notes',
    body: 'Scheduled daily, weekly and monthly billing runs, manual billing, automatic credit notes for accepted returns, PDF storage and customer e-mail, plus a reconciliation and retry engine resilient to ERP outages. 575 invoices and 150 credit notes issued without manual work since go-live in August 2026, and 1,700+ historical invoices reconciled into the platform.',
  },
  {
    title: 'Built the courier integration microservice',
    figure: '430+ shipments',
    body: 'SEUR and Nacex: automatic shipment registration and status tracking, replacing manual courier data entry. 430+ shipments and 3,100+ tracking events processed since July 2026.',
  },
  {
    title: 'Owned the full AWS infrastructure as code',
    figure: '50+ CloudFormation templates',
    body: 'ECS with autoscaling, ALB + WAF, RDS MariaDB, ElastiCache Redis, CloudFront, CodePipeline CI/CD for six services, observability alarms and IAM/security baselines. Imported hand-built legacy resources into managed stacks, with all changes applied through change sets.',
  },
  {
    title: 'Raised the quality bar',
    figure: '90% coverage gate',
    body: '32,000+ unit tests and 9,300+ end-to-end tests, a 90% coverage gate on all four metrics, an end-to-end role × data-ownership permission matrix for every new flow, and a sharded e2e pipeline that cut the pre-push suite from ~80 to ~30 minutes.',
  },
  {
    title: 'Migrated the Shopify store to our own B2B shop',
    figure: 'shop.uniformsflow.com',
    body: 'Migrated the Shopify store to our own B2B shop, shop.uniformsflow.com, built and run in-house.',
  },
  {
    title: 'Opened the platform to integrations',
    figure: 'Public API and webhooks',
    body: 'A public external API with API keys, outgoing webhooks, Make and partner webhooks, Airtable and transactional e-mail via SES.',
  },
  {
    title: 'Shipped internal AI products',
    figure: 'RAG, review agent, local models',
    body: 'vrain, a RAG assistant over the company handbook with cited answers. vranGPT, an internal ChatGPT-style app. Code Guardian, an autonomous code-review agent that files ClickUp tasks with patches. Per-business-unit Slack assistants running entirely on local models, so no business data leaves the company. And a garment size-estimator proof of concept.',
  },
  {
    title: 'Shipped the public site',
    figure: 'uniformsflow.com',
    body: 'The uniformsflow.com landing: Nuxt 4 SSG on S3 + CloudFront with its own CI/CD.',
  },
]

export const pipeline = [
  { name: 'Spec', detail: 'Spec-driven development.' },
  { name: 'Implementation', detail: 'Coding agents: Claude, Codex, Kimi.' },
  { name: 'Cross-model review', detail: 'Independent, with reproduction and mutation testing.' },
  { name: 'Browser QA', detail: '' },
]

export const vrandedStack =
  'TypeScript, NestJS, TypeORM, MariaDB, Redis, Nuxt 4 / Vue 3, Tailwind, Jest, Vitest, Playwright, AWS (ECS, RDS, CloudFront, WAF, CodePipeline, CloudFormation), Docker, Holded, Claude / Codex agents'

export const sideProjects = [
  {
    id: 'sentinel',
    name: 'Sentinel V2',
    figure: '17 agents',
    body: 'CrewAI swarm that turns market gaps into SaaS MVP drafts.',
    flow: ['research', 'match', 'build', 'human approval (Telegram)', 'deploy'],
  },
  {
    id: 'marcus',
    name: 'Marcus',
    figure: '5,000+ strategies',
    body: 'LLM-driven trader for Hyperliquid perpetuals, backed by a Python backtesting engine with 5,000+ strategies ported from PineScript.',
  },
  {
    id: 'precio',
    name: 'Precio Tirao',
    figure: 'price-radar',
    body: 'Multi-store pricing-error detector (affiliate feeds + Keepa for Amazon) that publishes deals to a public Telegram channel and a website with affiliate links.',
  },
  {
    id: 'hugo',
    name: 'HUGO',
    figure: '30B LLM, 4-bit, no cloud',
    body: 'Fully local Spanish voice assistant on Apple Silicon: streaming speech recognition, a 30B LLM quantised to 4-bit on MLX and sentence-level TTS, with no cloud APIs.',
  },
  {
    id: 'kate',
    name: 'Kate',
    figure: 'posts on a schedule',
    body: 'Autonomous social-media agent that turns research briefs into posts and publishes them on X on a schedule.',
  },
  {
    id: 'hardware',
    name: 'Hardware hacks',
    figure: 'BLE, reverse-engineered',
    body: 'Reverse-engineered the BLE protocol of a Xiaomi body-composition scale with a local dashboard, and turned a legacy Android tablet into a kiosk home panel.',
  },
]

// Dates as [year, month]. `null` end means present.
export type Role = {
  title: string
  company: string
  start: [number, number]
  end: [number, number] | null
  detail?: string
}

export const roles: Role[] = [
  {
    title: 'Software Lead',
    company: 'VRANDED (UniformsFlow)',
    start: [2026, 6],
    end: null,
    detail:
      'B2B SaaS for corporate uniform programmes in hospitality. Took ownership of an agency-built platform and turned it into the operational backbone of the business: ordering, fulfilment, courier logistics and ERP-integrated billing.',
  },
  {
    title: 'Founder & AI Systems Architect',
    company: 'ErsLabs',
    start: [2026, 1],
    end: null,
    detail: 'Software studio that builds client platforms and ships its own products.',
  },
  {
    title: 'Senior Software Developer / Team Lead',
    company: 'xFractal',
    start: [2024, 3],
    end: [2026, 1],
    detail:
      'Led the development team with Scrum. Designed the Trading API integrating six Solana liquidity sources (Meteora, Raydium, Orca, Pump.fun, PumpSwap, Moonshot) on a hexagonal architecture, and the order engine for limit and DCA orders. Built the User API with Privy authentication and a nightly-batch referral system. AWS infrastructure as code with CloudFormation.',
  },
  {
    title: 'Senior Software Developer / Team Lead',
    company: 'Brave',
    start: [2021, 4],
    end: [2024, 4],
    detail:
      'Designed the BravePro and BravePay financial APIs, cutting response times by 60% and enabling auto-scaling. Built a compliant KYC service that reduced onboarding time by 70%. Delivered batch services: USDB/USDC stability trading bot, rewards engine, subscription manager, crypto deposit processor and oracle price feed, plus card deposits with Stripe.',
  },
  {
    title: 'Software Engineer',
    company: 'Web3Software',
    start: [2023, 4],
    end: [2024, 3],
    detail:
      'Built SamuraiBot, a high-performance Solana trading bot on Telegram. Led Robin Protocol, a multichain DApp to recover tokens from compromised wallets. Built MultiMode, a lottery DApp on the Mode Ethereum L2.',
  },
  {
    title: 'Senior Backend Developer',
    company: 'Whisbi',
    start: [2021, 1],
    end: [2021, 12],
    detail:
      'Redesigned the legacy chatbot services (Conversation Builder, Data Services), reducing latency by 50% and enabling dynamic scaling for real-time data.',
  },
  {
    title: 'Senior Engineer',
    company: 'Wallbox',
    start: [2019, 6],
    end: [2020, 12],
    detail:
      'Implemented real-time WebSocket communication between EV chargers and the backend (OCPP). Built an API-driven firmware update tool that raised customer satisfaction by 45%.',
  },
  {
    title: 'Senior Lead Developer',
    company: 'UxsMobile',
    start: [2018, 1],
    end: [2019, 4],
    detail: 'Built CanaryPAY, a Node.js payments and transfers platform integrated with PayPal and Onfido KYC.',
  },
  {
    title: 'Software Developer',
    company: 'Autentia Real Business',
    start: [2017, 2],
    end: [2018, 12],
    detail: 'Backend for the Vocento-Beauty app. Budget administration app for Málaga city councils (Angular).',
  },
  {
    title: 'Software Developer',
    company: 'Melit',
    start: [2015, 10],
    end: [2017, 1],
    detail: 'VISA transaction verification app for Bankia. Pest-control service management app for Rentokil.',
  },
  { title: 'Freelance Software Developer', company: 'Freelance', start: [2013, 6], end: [2015, 10] },
  { title: 'Functional Analyst', company: 'Experix', start: [2010, 1], end: [2013, 4] },
  { title: 'Bank Analyst', company: 'OESIA', start: [2007, 12], end: [2009, 10] },
  { title: 'Bank Developer', company: 'Axpe Consulting', start: [2006, 10], end: [2007, 12] },
  { title: 'Junior Consultant', company: 'DMR Consulting (Everis)', start: [2005, 10], end: [2006, 10] },
]

export const skills = [
  { group: 'Languages', items: 'TypeScript, JavaScript, Python, SQL, Shell' },
  {
    group: 'Backend & frontend',
    items: 'NestJS, Node.js, Express, TypeORM, Prisma, FastAPI, Nuxt 4, Vue 3, React, Next.js, Angular, Tailwind',
  },
  {
    group: 'AI & agents',
    items:
      'Claude API, OpenAI API, multi-agent orchestration, coding agents (Claude Code, Codex), RAG, MCP servers, LLM evaluation, prompt engineering',
  },
  {
    group: 'Cloud & DevOps',
    items:
      'AWS (ECS, RDS, ElastiCache, CloudFront, WAF, Lambda, CodePipeline, CloudFormation), Docker, CI/CD, observability, Linux',
  },
  { group: 'Data', items: 'MariaDB/MySQL, PostgreSQL, MongoDB, Redis' },
  {
    group: 'Integrations',
    items: 'Holded ERP, SEUR, Nacex, Stripe, PayPal, Onfido, Privy, Telegram and Discord APIs',
  },
  {
    group: 'Quality',
    items: 'Jest, Vitest, Playwright, e2e permission matrices, mutation testing, coverage gates',
  },
  {
    group: 'Blockchain & trading',
    items:
      'Ethereum, Solana, XRPL, Stellar, Polygon, DEX integrations, algorithmic trading, latency arbitrage, market making',
  },
  {
    group: 'Methods',
    items: 'DDD, hexagonal architecture, microservices, Scrum, spec-driven development',
  },
]
