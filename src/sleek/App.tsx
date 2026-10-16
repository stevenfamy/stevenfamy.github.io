import type { ReactNode } from 'react'
import { ThemeToggle, uptime } from '../App'
import { DotGrid } from './DotGrid'
import { about, certifications, education, experience, profile, projects, skills } from '../content'

// Hero proof column: the scope Steven owns, top of the stack to the bottom.
const scope = [
  ['Network', 'Firewalls, VPN, LAN'],
  ['Servers', 'Linux, Windows Server'],
  ['Cloud', 'AWS, DigitalOcean, R2'],
  ['Backend', 'Node.js, Go, PHP'],
  ['Devices', 'ESP32, MQTT'],
  ['People', 'Internal apps, support'],
]

// One diptych row. `flip` puts the heading on the right on wide screens.
function Split({ id, title, lede, flip, side, children }: {
  id: string; title: string; lede?: ReactNode; flip?: boolean; side?: ReactNode; children: ReactNode
}) {
  return (
    <section id={id} className={`split${flip ? ' flip' : ''}`}>
      <div className="split-head">
        <h2>{title}</h2>
        {lede && <p className="lede">{lede}</p>}
        {side}
      </div>
      <div className="split-body">{children}</div>
    </section>
  )
}

export default function App() {
  const years = uptime(profile.careerStart).split('y')[0]
  const now = experience[0]
  return (
    <>
      <DotGrid />
      <header className="nav wrap">
        <a href="#top" className="wordmark">Steven Famy</a>
        <div className="nav-end">
          <ThemeToggle />
          <a className="btn outline" href={`mailto:${profile.email}`}>Email me</a>
        </div>
      </header>

      <main id="top" className="wrap">
        <section className="hero">
          <div className="hero-text">
            <p className="status"><span className="dot" />{now.role} at {now.company} · open to remote roles</p>
            <h1>I keep businesses running, from cables to code.</h1>
            <p className="lede">
              {profile.role} based in {profile.location}. {about.principles[0].body}
            </p>
            <div className="cta">
              <a className="btn solid" href={`mailto:${profile.email}`}>Email me</a>
              <a className="btn outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <figure className="scope">
            <figcaption>What I look after</figcaption>
            <dl>
              {scope.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
            </dl>
          </figure>
        </section>

        <dl className="facts">
          <div><dt>{years}+</dt><dd>years in IT, from support desk to management</dd></div>
          <div><dt>40+</dt><dd>staff supported as company-wide IT Manager</dd></div>
          <div><dt>1st</dt><dd>CI/CD pipeline built for the organisation</dd></div>
        </dl>

        <Split id="about" title="One person across the whole stack" lede={about.intro}>
          <ol className="rows">
            {about.principles.map((p, i) => (
              <li key={p.title}>
                <span className="idx">0{i + 1}</span>
                <div><h3>{p.title}</h3><p>{p.body}</p></div>
              </li>
            ))}
          </ol>
        </Split>

        <Split id="experience" flip title="Fourteen years, one through-line"
          lede="Support desk to IT management to IoT, with backend work running underneath all of it.">
          <ol className="jobs">
            {experience.map((j) => (
              <li key={j.company + j.period}>
                <p className="when">{j.period}</p>
                <h3>{j.role}</h3>
                <p className="org">{j.company} · {j.place}</p>
                {j.note && <p className="note">{j.note}</p>}
                <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </li>
            ))}
          </ol>
        </Split>

        <Split id="work" title="Things I've built and still run"
          lede={`Currently growing toward ${about.growing.join(', ').replace(/, ([^,]*)$/, ', and $1')}.`}>
          <div className="works">
            {projects.map((p) => (
              <article key={p.name} className="work">
                <p className="when">{p.where}</p>
                <h3>{p.name}</h3>
                <p>{p.body}</p>
                <p className="stack">{p.tags.join(' · ')}</p>
              </article>
            ))}
          </div>
        </Split>

        <Split id="skills" flip title="Tools I reach for"
          side={
            <div className="creds">
              <h3>Education</h3>
              {education.map((e) => <p key={e.title}>{e.title}<br /><span className="muted">{e.where}, {e.period}</span></p>)}
              <h3>Certifications</h3>
              <ul>{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
            </div>
          }>
          <dl className="skills">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}><dt>{group}</dt><dd>{items.join(', ')}</dd></div>
            ))}
          </dl>
        </Split>
      </main>

      <footer id="contact" className="close wrap">
        <p className="statement">Let's build something reliable.</p>
        <p className="lede">Open to remote roles in IT operations, infrastructure, and backend engineering. {profile.languages}.</p>
        <div className="cta">
          <a className="btn solid" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn outline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <p className="foot-line">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </footer>
    </>
  )
}
