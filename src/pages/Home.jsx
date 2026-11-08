import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import Fx from '../components/Fx.jsx'
import { home, site, PLACEHOLDER } from '../content/index.js'

const loadSwarm = () => import('./../components/reactbits/HeroSwarm.jsx')
const loadReveal = () => import('./../components/reactbits/AnimatedContent.jsx')

// visibility:visible keeps the prerendered text on screen without JS; GSAP only adds the motion.
const reveal = { distance: 28, duration: 0.55, threshold: 0.15, style: { visibility: 'visible' } }

const hasEmail = site.email !== PLACEHOLDER

export default function Home() {
  return (
    <Layout current="index.html">
      <section className="hero hero--landing">
        <div className="hero__fx" aria-hidden="true">
          <Fx load={loadSwarm} query="(pointer: fine)" />
        </div>

        <div className="page hero__body">
          <h1>
            <Text value={home.headline} />
          </h1>
          <p className="lede">
            <Text value={home.intro} />
          </p>
          <p className="actions">
            <a className="button" href="contact.html">
              Get in touch
            </a>
            <a className="button button--line" href="experience.html">
              See experience
            </a>
          </p>
        </div>
      </section>

      <div className="page">
        {home.sections.map((section) => (
          <Fx key={section.title} load={loadReveal} props={reveal}>
            <section className="section stack">
              <h2>{section.title}</h2>
              <p>
                <Text value={section.body} />
              </p>
            </section>
          </Fx>
        ))}

        <section className="section section--support stack on-support">
          <h2>Get in touch</h2>
          <p>
            {hasEmail ? <a href={`mailto:${site.email}`}>{site.email}</a> : <Text value={PLACEHOLDER} />}
          </p>
        </section>
      </div>
    </Layout>
  )
}
