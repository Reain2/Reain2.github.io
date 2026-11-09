import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import Fx from '../components/Fx.jsx'
import { home, site, PLACEHOLDER } from '../content/index.js'

const loadSwarm = () => import('./../components/reactbits/HeroSwarm.jsx')
const loadReveal = () => import('./../components/reactbits/AnimatedContent.jsx')

// visibility:visible keeps the prerendered text on screen without JS; GSAP only adds the motion.
const reveal = { distance: 28, duration: 0.55, threshold: 0.15, style: { visibility: 'visible' } }
const heroReveal = { distance: 40, duration: 0.8, trigger: 'mount', style: { visibility: 'visible' } }

const hasEmail = site.email !== PLACEHOLDER

export default function Home() {
  return (
    <Layout current="index.html">
      <section className="hero hero--landing">
        <div className="hero__fx" aria-hidden="true">
          <Fx load={loadSwarm} query="(pointer: fine)" />
        </div>

        <Fx load={loadReveal} props={heroReveal}>
          <div className="page hero__body">
            <h1>Tech explorer.</h1>
            <p className="lede">
              <Text value={home.intro} />
            </p>
            <p className="hero__fact">Tech enthusiast · Photography · Video · AI</p>
            <p className="actions">
              <a className="button" href="contact.html">Get in touch</a>
              <a className="button button--line" href="experience.html">See experience</a>
            </p>
          </div>
        </Fx>
        <Fx load={loadReveal} props={{ ...heroReveal, delay: 0.15 }}>
          <figure className="hero__media">
            <img src="og.png" alt="Portfolio preview for Samuel Rain Gunawan" />
          </figure>
        </Fx>
      </section>

      <div className="page">
        {home.sections.map((section) => (
          <Fx key={section.title} load={loadReveal} props={reveal}>
            <section className="section stack">
              <h2>{section.title}</h2>
              <p>
                <Text value={section.body} />
              </p>
              <figure className="section__visual">
                <img src="og.png" alt="Samuel Rain Gunawan portfolio graphic" loading="lazy" />
              </figure>
            </section>
          </Fx>
        ))}

        <Fx load={loadReveal} props={reveal}>
          <section className="section section--support stack on-support">
            <h2>Get in touch</h2>
            <p>
              {hasEmail ? <a href={`mailto:${site.email}`}>{site.email}</a> : <Text value={PLACEHOLDER} />}
            </p>
          </section>
        </Fx>
      </div>
    </Layout>
  )
}
