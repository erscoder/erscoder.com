import ContourField from '@/components/ContourField'
import Header from '@/components/Header'
import KineticName from '@/components/KineticName'
import {
  contact,
  kpis,
  pipeline,
  platformScale,
  roles,
  sideProjects,
  skills,
  vrandedStack,
  vrandedWork,
  type Role,
} from '@/content/cv'

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const AXIS_START = 2005.75
const AXIS_END = 2027
const NOW: [number, number] = [2026, 11]
const TICKS = [2006, 2010, 2014, 2018, 2022, 2026]

const toYear = ([y, m]: [number, number], endOfMonth = false) => y + (m - 1 + (endOfMonth ? 1 : 0)) / 12
const frac = (year: number) => (year - AXIS_START) / (AXIS_END - AXIS_START)
const fmt = ([y, m]: [number, number]) => `${MONTHS[m - 1]} ${y}`

function span(role: Role) {
  const s = frac(toYear(role.start))
  const e = frac(toYear(role.end ?? NOW, true))
  return { ['--s' as string]: s.toFixed(4), ['--l' as string]: (e - s).toFixed(4) }
}

export default function Page() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Header email={contact.email} />

      <main id="main">
        <section className="hero" id="top">
          <ContourField seed={3.7} />
          <div className="wrap hero-inner">
            <p className="hero-role">Software Lead · AI-augmented engineering</p>
            <div className="hero-name">
              <KineticName />
              <div className="hero-side">
                <p>
                  Software Lead at VRANDED. 20+ years shipping production platforms across B2B SaaS, fintech and Web3.
                </p>
                <div className="hero-cta">
                  <a className="button" href={`mailto:${contact.email}`}>
                    Email me
                  </a>
                  <a className="link" href="#impact">
                    See the work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="impact" aria-labelledby="impact-title">
          <div className="wrap">
            <h2 className="title" id="impact-title">
              VRANDED impact
            </h2>
            <p className="lede">
              I took ownership of an agency-built platform and turned it into the operational backbone of the business:
              ordering, fulfilment, courier logistics and ERP-integrated billing. Software Lead since June 2026.
            </p>

            <ul className="kpis">
              {kpis.map((k) => (
                <li key={k.value}>
                  <strong>{k.value}</strong>
                  <span>{k.label}</span>
                </li>
              ))}
            </ul>

            <dl className="scale">
              <div className="scale-intro">
                <dt>UniformsFlow</dt>
                <dd>B2B SaaS for corporate uniform programmes in hospitality</dd>
              </div>
              {platformScale.map((s) => (
                <div key={s.label}>
                  <dd>{s.value}</dd>
                  <dt>{s.label}</dt>
                </div>
              ))}
            </dl>

            <div className="pipeline">
              <h3>The delivery model behind that throughput</h3>
              <ol>
                {pipeline.map((p) => (
                  <li key={p.name}>
                    <strong>{p.name}</strong>
                    {p.detail && <span>{p.detail}</span>}
                  </li>
                ))}
              </ol>
              <p className="pipeline-gates">
                <strong>120+</strong> automated hooks and gates enforce every hand-off. A multi-agent pipeline that
                lets a very small team ship at the pace of a much larger one.
              </p>
            </div>

            <div className="work">
              {vrandedWork.map((w, i) => (
                <details key={w.title} open={i === 0}>
                  <summary>
                    <span className="work-title">{w.title}</span>
                    <span className="work-figure">{w.figure}</span>
                  </summary>
                  <p>{w.body}</p>
                </details>
              ))}
            </div>

            <p className="stack">
              <span>Stack</span> {vrandedStack}
            </p>
          </div>
        </section>

        <section className="section section-flush" id="erslabs" aria-labelledby="erslabs-title">
          <div className="wrap">
            <h2 className="title" id="erslabs-title">
              ErsLabs
            </h2>
            <p className="lede">
              The software studio I founded in January 2026. It builds client platforms and ships its own products.{' '}
              <a className="link" href="https://erslabs.net" rel="noopener">
                erslabs.net
              </a>
            </p>
          </div>

          <div className="plates">
            <article className="plate plate-f1">
              <div className="wrap plate-inner">
                <header>
                  <h3>F1 Ultimate</h3>
                  <p className="plate-meta">In development since November 2026, v0.7.1</p>
                </header>
                <p className="plate-lede">
                  Browser Formula 1 racing simulator in Three.js + TypeScript. One rigid-body vehicle model (Pacejka
                  tyres with combined slip, aero, 8-speed gearbox, tyre temperature and wear, damage) runs in a Web
                  Worker and is shared by the player and 21 AI drivers.
                </p>
                <dl className="plate-stats">
                  <div>
                    <dd>500 Hz</dd>
                    <dt>rigid-body vehicle model</dt>
                  </div>
                  <div>
                    <dd>22</dd>
                    <dt>cars in a full race, with pit stops</dt>
                  </div>
                  <div>
                    <dd>15</dd>
                    <dt>real 2026-calendar circuits, each within ±1% of its official length</dt>
                  </div>
                  <div>
                    <dd>19 days</dd>
                    <dt>to build, by AI coding agents I orchestrated</dt>
                  </div>
                </dl>
                <p className="plate-foot">
                  Circuits are generated from OpenStreetMap and DEM/LiDAR elevation data. Training, Arcade and
                  Championship modes, with parts-shop stats measured by running the physics headless. Specs,
                  cross-model review and automated merge gates: 858 commits, 84 tickets, ~2,300 unit and 233 Playwright
                  e2e tests.
                </p>
                <p>
                  <a className="link" href="https://f1.erslabs.net" rel="noopener">
                    f1.erslabs.net
                  </a>
                </p>
              </div>
            </article>

            <article className="plate plate-capline">
              <div className="wrap plate-inner">
                <header>
                  <h3>Capline</h3>
                  <p className="plate-meta">Launching</p>
                </header>
                <p className="plate-quote">No audio ever leaves the phone.</p>
                <div className="plate-cols">
                  <p>
                    Android video editor for content creators, designed around free, on-device, offline auto-captions
                    with whisper.cpp.
                  </p>
                  <p>Kotlin, Jetpack Compose, Media3, Hilt. 1,000+ commits since October.</p>
                  <p>
                    <a className="link" href="https://capline.erslabs.net" rel="noopener">
                      capline.erslabs.net
                    </a>
                  </p>
                </div>
              </div>
            </article>

            <article className="plate plate-synapseia">
              <div className="wrap plate-inner">
                <header>
                  <h3>Synapseia Network</h3>
                  <p className="plate-meta">Closed beta on Solana devnet, March to June 2026. Discontinued.</p>
                </header>
                <div className="synapseia-grid">
                  <div>
                    <p className="plate-lede">
                      Peer-to-peer compute network where operators lend CPU/GPU to autonomous AI research agents and
                      earn an SPL token. Designed and built end to end as a solo engineer.
                    </p>
                    <ul className="parts">
                      <li>
                        <strong>Coordinator</strong> NestJS: work orders, research rounds with peer review, reputation
                        and reward accrual. PostgreSQL, Redis/BullMQ, Socket.IO, Prometheus.
                      </li>
                      <li>
                        <strong>Node runtime CLI</strong> LangGraph agents on Ollama over a libp2p mesh (gossipsub,
                        Kad-DHT, Noise).
                      </li>
                      <li>
                        <strong>Desktop app</strong> Tauri/Rust, for operators.
                      </li>
                      <li>
                        <strong>Four Anchor programs</strong> Token, staking, escrow and a claim-based rewards vault.
                      </li>
                      <li>
                        <strong>Wallet dashboard</strong> Next.js.
                      </li>
                    </ul>
                    <p className="plate-foot">2,300+ commits and 9,300+ automated tests.</p>
                  </div>
                  <figure>
                    <img
                      src="/synapseia-cover.webp"
                      width={1800}
                      height={978}
                      loading="lazy"
                      decoding="async"
                      alt="Synapseia network dashboard: node distribution globe and a network graph with a coordinator and three nodes"
                    />
                  </figure>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section" id="side-projects" aria-labelledby="side-title">
          <div className="wrap">
            <h2 className="title" id="side-title">
              Side projects
            </h2>
            <p className="lede">What I built in 2026 outside of work.</p>
            <ul className="bento">
              {sideProjects.map((p) => (
                <li key={p.id} className={`cell cell-${p.id}`}>
                  <p className="cell-figure">{p.figure}</p>
                  <h3>{p.name}</h3>
                  <p>{p.body}</p>
                  {p.flow && (
                    <ol className="flow" aria-label="Loop">
                      {p.flow.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="exp-title">
          <div className="wrap">
            <h2 className="title" id="exp-title">
              Experience
            </h2>
            <p className="lede">20+ years, from bank consultancy to leading platforms. Every role, to scale.</p>

            <div className="timeline">
              <div className="axis" aria-hidden="true">
                <div>
                  {TICKS.map((t) => (
                    <span key={t} style={{ ['--s' as string]: frac(t).toFixed(4) }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <ol>
                {roles.map((r) => (
                  <li key={r.company + r.start.join('-')} className={r.end ? undefined : 'current'}>
                    <p className="when">
                      {fmt(r.start)} - {r.end ? fmt(r.end) : 'Present'}
                    </p>
                    <div className="what">
                      <h3>
                        {r.title}
                        {r.company !== 'Freelance' && <span> {r.company}</span>}
                      </h3>
                      {r.detail && <p>{r.detail}</p>}
                    </div>
                    <div className="track" aria-hidden="true">
                      <i style={span(r)} />
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="wrap">
            <h2 className="title" id="skills-title">
              Skills
            </h2>
            <dl className="skills">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="section" id="writing" aria-labelledby="writing-title">
          <div className="wrap">
            <h2 className="title" id="writing-title">
              Writing
            </h2>
            <div className="book">
              <img
                src="/ia-rentable-cover.jpg"
                width={784}
                height={1168}
                loading="lazy"
                decoding="async"
                alt="Book cover: IA Rentable, 12 Negocios Automatizados que Puedes crear ya, by Enrique Rubio"
              />
              <div className="book-copy">
                <p className="book-kind">Published author</p>
                <h3 lang="es">IA Rentable: 12 Negocios Automatizados que puedes crear ya</h3>
                <p>Amazon KDP, 2026. Written in Spanish.</p>
                <dl className="facts">
                  <div>
                    <dt>Education</dt>
                    <dd>Senior Computer Engineer, Universidad Pontificia de Salamanca, Spain (1999 - 2005)</dd>
                  </div>
                  <div>
                    <dt>Languages</dt>
                    <dd>Spanish (native), English (professional)</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="contact" id="contact">
        <ContourField seed={11.2} />
        <div className="wrap contact-inner">
          <h2 className="title">Contact</h2>
          <a className="contact-mail" href={`mailto:${contact.email}`}>
            {contact.email.split('@')[0]}
            <wbr />@{contact.email.split('@')[1]}
          </a>
          <ul className="contact-links">
            {contact.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} rel="noopener me">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="colophon">Enrique Rubio Sánchez. Madrid, Spain. 2026.</p>
        </div>
      </footer>
    </>
  )
}
