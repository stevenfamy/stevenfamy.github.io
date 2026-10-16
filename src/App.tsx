import { useState } from 'react'
import { about, certifications, education, experience, profile, projects, skills } from './content'

export function uptime(since: string) {
  const s = new Date(since)
  const n = new Date()
  const months = (n.getFullYear() - s.getFullYear()) * 12 + n.getMonth() - s.getMonth()
  return `${Math.floor(months / 12)}y ${months % 12}m`
}

export function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? '')
  const isDark = theme ? theme === 'dark' : !matchMedia('(prefers-color-scheme: light)').matches
  const toggle = () => {
    const next = isDark ? 'light' : 'dark'
    document.documentElement.dataset.theme = next
    try { localStorage.setItem('theme', next) } catch { /* storage unavailable */ }
    setTheme(next)
  }
  return (
    <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
      {isDark ? '☀' : '☾'}
    </button>
  )
}

const flags = [['about', 'about'], ['log', 'log'], ['work', 'work'], ['stack', 'stack']]

export default function App() {
  const [y, m] = uptime(profile.careerStart).split(' ')
  return (
    <>
      <header className="nav wrap">
        <div className="prompt">
          <a href="#top" className="who">~/steven-famy</a>
          <span className="sigil" aria-hidden="true">$</span>
          <nav aria-label="Sections" className="flags">
            {flags.map(([id, label]) => <a key={id} href={`#${id}`}>--{label}</a>)}
          </nav>
        </div>
        <ThemeToggle />
      </header>

      <main id="top" className="wrap">
        <section className="stat-hero">
          <p className="figure" aria-label={`${y} ${m} in IT`}>{y}<span className="unit"> {m}</span></p>
          <h1>Fourteen years keeping businesses running, from cables to code.</h1>
          <p className="qualifier">
            {profile.name} · {profile.role} · {profile.location}. Uptime counted from my first support ticket in November 2011.
          </p>
          <div className="cta">
            <a className="btn solid" href={`mailto:${profile.email}`}>Email me</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>

        <dl className="strip">
          <div><dt>40+</dt><dd>staff on my IT watch at GRIP Principle</dd></div>
          <div><dt>1st</dt><dd>CI/CD pipeline the organisation ever had</dd></div>
          <div><dt>{experience.length}</dt><dd>organisations, from a bank to a 5-star hotel</dd></div>
          <div><dt>{projects.length}</dt><dd>systems below, all built or commissioned by me</dd></div>
        </dl>

        <section id="about" className="block">
          <h2>How I run things</h2>
          <p className="lead">{about.intro}</p>
          <dl className="spec">
            {about.principles.map((p) => <div key={p.title}><dt>{p.title}</dt><dd>{p.body}</dd></div>)}
            <div><dt>Learning next</dt><dd>{about.growing.join(' · ')}</dd></div>
          </dl>
        </section>

        <section id="log" className="block">
          <h2>Change log</h2>
          <ol className="log">
            {experience.map((j) => (
              <li key={j.company + j.period}>
                <p className="ts">{j.period}</p>
                <div>
                  <h3>{j.role}</h3>
                  <p className="meta">{j.company} · {j.place}{j.note && ` · ${j.note}`}</p>
                  <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="work" className="block">
          <h2>Running in production</h2>
          <ol className="services">
            {projects.map((p) => (
              <li key={p.name}>
                <h3>{p.name}</h3>
                <p className="meta">{p.where}</p>
                <p>{p.body}</p>
                <p className="tags">{p.tags.join(' / ')}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="stack" className="block">
          <h2>Stack, top to bottom</h2>
          <dl className="spec">
            {Object.entries(skills).map(([group, items]) => <div key={group}><dt>{group}</dt><dd>{items.join(' · ')}</dd></div>)}
          </dl>
        </section>
      </main>

      <footer className="colophon wrap">
        <p className="ask">Need one person to own the whole system? <a href={`mailto:${profile.email}`}>{profile.email}</a></p>
        <pre className="log-lines">
{`contact   `}<a href={`mailto:${profile.email}`}>{profile.email}</a>{` · `}<a href={profile.linkedin} target="_blank" rel="noreferrer">linkedin</a>{`
mode      open to remote · ${profile.languages}
`}{education.map((e) => `edu       ${e.title}, ${e.where} (${e.period})\n`).join('')}{certifications.map((c) => `cert      ${c}\n`).join('')}{`designs   `}<a href="./blueprint.html">blueprint</a>{` · `}<a href="./classic.html">classic</a>{` · `}<a href="./">sleek</a>{`
exit 0    © ${new Date().getFullYear()} ${profile.name}`}
        </pre>
      </footer>
    </>
  )
}
