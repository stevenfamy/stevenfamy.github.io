import { ThemeToggle, uptime } from '../App'
import { about, certifications, education, experience, profile, projects, skills } from '../content'

const rail = [['map', 'Map'], ['layers', 'Layers'], ['built', 'Built'], ['history', 'History'], ['notes', 'Notes']]

// The map: one box per skill group, wired in the order traffic actually flows.
const nodes = [
  { id: 'network', x: 320, y: 130, label: 'Network', sub: 'firewalls · VPN · DNS', group: 'Network & Security' },
  { id: 'platform', x: 160, y: 240, label: 'Platform', sub: 'Linux · Docker · AWS', group: 'DevOps & Infra' },
  { id: 'data', x: 480, y: 240, label: 'Data', sub: 'MySQL · Redis · Mongo', group: 'Databases & Storage' },
  { id: 'backend', x: 320, y: 350, label: 'Backend', sub: 'Node.js · Go · PHP', group: 'Backend & Web' },
  { id: 'edge', x: 160, y: 460, label: 'Devices', sub: 'ESP32 · MQTT', group: 'IoT & Embedded' },
  { id: 'site', x: 480, y: 460, label: 'Site & people', sub: 'CCTV · PABX · support', group: 'IT Operations' },
]
const wires = [
  'M320 60 V100',
  'M320 160 V196 H160 V210', 'M320 160 V196 H480 V210',
  'M160 270 V306 H320 V320', 'M480 270 V306 H320 V320',
  'M320 380 V416 H160 V430', 'M320 380 V416 H480 V430',
]

function SystemMap() {
  return (
    <svg className="map" viewBox="0 0 640 500" role="img" aria-labelledby="map-title">
      <title id="map-title">System map: internet, network, platform and data, backend, then devices and site operations</title>
      {wires.map((d) => <path key={d} d={d} className="wire" />)}
      <g className="origin">
        <rect x="260" y="20" width="120" height="40" rx="6" />
        <text x="320" y="45">Internet</text>
      </g>
      {nodes.map((n) => (
        <a key={n.id} href={`#layer-${n.id}`} className="node">
          <rect x={n.x - 110} y={n.y - 30} width="220" height="60" rx="6" />
          <text x={n.x} y={n.y - 4} className="n-label">{n.label}</text>
          <text x={n.x} y={n.y + 16} className="n-sub">{n.sub}</text>
        </a>
      ))}
    </svg>
  )
}

export default function App() {
  const years = uptime(profile.careerStart).split('y')[0]
  return (
    <div className="shell">
      <aside className="rail">
        <a href="#top" className="wordmark">S. Famy</a>
        <nav aria-label="Sections">
          {rail.map(([id, label], i) => <a key={id} href={`#${id}`}><span>{i + 1}</span>{label}</a>)}
        </nav>
        <div className="rail-end">
          <a className="rail-mail" href={`mailto:${profile.email}`}>Email me</a>
          <ThemeToggle />
        </div>
      </aside>

      <main id="top" className="main">
        <header className="intro">
          <h1>Internet to device, one owner for the whole path.</h1>
          <p className="lede">
            {profile.name} · {profile.role} · {profile.location}. {years}+ years running every box on the map below,
            and the cables between them.
          </p>
        </header>

        <section id="map" className="band" aria-label="System map">
          <div className="band-inner">
            <SystemMap />
            <div className="legend">
              <p><span className="key" aria-hidden="true" /> Each box is a layer I run day to day. Select one to see the tools.</p>
              <a className="btn primary" href={`mailto:${profile.email}`}>Talk about your stack</a>
            </div>
          </div>
        </section>

        <section id="layers" className="sec">
          <h2>Layers, top to bottom</h2>
          <dl className="layers">
            {nodes.map((n) => (
              <div key={n.id} id={`layer-${n.id}`}>
                <dt>{n.label}<span>{n.group}</span></dt>
                <dd>{skills[n.group].join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="built" className="sec">
          <h2>Built on this map</h2>
          <div className="built">
            {projects.map((p) => (
              <article key={p.name}>
                <h3>{p.name}</h3>
                <p className="meta">{p.where}</p>
                <p>{p.body}</p>
                <p className="tags">{p.tags.join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="history" className="sec">
          <h2>How the map grew</h2>
          <ol className="history">
            {experience.map((j) => (
              <li key={j.company + j.period}>
                <p className="when">{j.period}</p>
                <div>
                  <h3>{j.role}</h3>
                  <p className="meta">{j.company} · {j.place}</p>
                  {j.note && <p className="note">{j.note}</p>}
                  <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="notes" className="sec notes">
          <div>
            <h2>Operating notes</h2>
            <p className="lede">{about.intro}</p>
            <ul className="principles">
              {about.principles.map((p) => <li key={p.title}><b>{p.title}.</b> {p.body}</li>)}
            </ul>
            <p className="next">Next on the map: {about.growing.join(', ')}.</p>
          </div>
          <div className="creds">
            <h3>Education</h3>
            {education.map((e) => <p key={e.title}>{e.title}<br /><span className="meta">{e.where} · {e.period}</span></p>)}
            <h3>Certifications</h3>
            <ul>{certifications.map((c) => <li key={c}>{c}</li>)}</ul>
          </div>
        </section>

        <footer className="foot">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>Other designs: <a href="./ops.html">Ops</a> · <a href="./classic.html">Classic</a> · <a href="./">Sleek</a></span>
        </footer>
      </main>
    </div>
  )
}
