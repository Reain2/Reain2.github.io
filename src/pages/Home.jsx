import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import Fx from '../components/Fx.jsx'
import { home, site, PLACEHOLDER } from '../content/index.js'

const loadReveal = () => import('./../components/reactbits/FadeContent.jsx')

// visibility:visible keeps the prerendered text on screen without JS; GSAP only adds the motion.
const reveal = { duration: 0.55, threshold: 0.12, initialOpacity: 1, blur: 2 }
const heroReveal = { duration: 0.45, trigger: 'mount', initialOpacity: 1, blur: 1 }

const hasEmail = site.email !== PLACEHOLDER

export default function Home() {
  return (
    <Layout current="index.html">
      <section className="hero hero--landing">
        <Fx load={loadReveal} props={heroReveal}>
          <div className="page hero__body">
            <h1><Text value={home.headline} /></h1>
            <p className="lede">
              <Text value={home.intro} />
            </p>
            <p className="hero__fact">{site.tagline}</p>
            <p className="actions">
              <a className="text-link" href="experience.html">Read the record <span aria-hidden="true">↗</span></a>
            </p>
          </div>
        </Fx>
      </section>

      <div className="page">
        {home.sections.map((section) => (
          <Fx key={section.title} load={loadReveal} props={reveal}>
            <section className="section stack">
              <h2>{section.title}</h2>
              <p>
                <Text value={section.body} />
                {section.href && <><br /><a className="text-link" href={section.href} target="_blank" rel="noopener noreferrer">View Gravity Slash <span aria-hidden="true">↗</span></a></>}
              </p>
            </section>
          </Fx>
        ))}

        <Fx load={loadReveal} props={reveal}>
          <section className="section section--support stack on-support">
            <h2>Start a conversation.</h2>
            <p>
              {hasEmail ? <a href={`mailto:${site.email}`}>{site.email}</a> : <Text value={PLACEHOLDER} />}
            </p>
          </section>
        </Fx>
      </div>
    </Layout>
  )
}
