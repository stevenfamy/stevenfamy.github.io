import { ThemeToggle } from '../App'
import { about, certifications, education, experience, profile, projects, skills } from '../content'

const links = [['experience', 'Experience'], ['work', 'Work'], ['skills', 'Skills'], ['contact', 'Contact']]

export default function App() {
  return (
    <>
      <header className="masthead col">
        <div className="issue">
          <span>{profile.location} · Open to remote roles</span>
          <ThemeToggle />
        </div>
        <h1>{profile.name}</h1>
        <p className="role">{profile.role}</p>
        <nav aria-label="Sections">
          {links.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
      </header>

      <main className="col">
        <p className="lede">{profile.tagline}</p>

        <section className="part">
          <p>{about.intro}</p>
          {about.principles.map((p) => <p key={p.title}><b>{p.title}.</b> {p.body}</p>)}
          <p>These days I am growing toward {about.growing.join(', ').replace(/, ([^,]*)$/, ', and $1')}.</p>
        </section>

        <section id="experience" className="part">
          <h2>Experience</h2>
          {experience.map((j) => (
            <article key={j.company + j.period} className="job">
              <h3>{j.role}, <span>{j.company}</span></h3>
              <p className="dateline">{j.period} · {j.place}{j.note && ` · ${j.note}`}</p>
              <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </section>

        <section id="work" className="part">
          <h2>Selected work</h2>
          {projects.map((p) => (
            <p key={p.name}><b>{p.name}</b> <span className="dateline">({p.where})</span>. {p.body} <span className="dateline">{p.tags.join(', ')}.</span></p>
          ))}
        </section>

        <section id="skills" className="part">
          <h2>Skills and credentials</h2>
          {Object.entries(skills).map(([group, items]) => <p key={group} className="runin"><b>{group}.</b> {items.join(', ')}.</p>)}
          {education.map((e) => <p key={e.title} className="runin"><b>Education.</b> {e.title}, {e.where}, {e.period}.</p>)}
          <p className="runin"><b>Certifications.</b> {certifications.join('; ')}.</p>
          <p className="runin"><b>Languages.</b> {profile.languages}.</p>
        </section>

        <section id="contact" className="letter">
          <p>
            Thanks for reading. If you need someone who can own IT operations, infrastructure and the backend that runs on it,
            write to me at <a href={`mailto:${profile.email}`}>{profile.email}</a> or find me on{' '}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>.
          </p>
          <p className="sign">— Steven</p>
        </section>
      </main>

      <footer className="col colophon">
        © {new Date().getFullYear()} {profile.name} · Other designs: <a href="./ops.html">Ops</a> · <a href="./blueprint.html">Blueprint</a> · <a href="./">Sleek</a>
      </footer>
    </>
  )
}
