import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import Fx from '../components/Fx.jsx'
import { home, site, PLACEHOLDER } from '../content/index.js'

const loadReveal = () => import('./../components/reactbits/AnimatedContent.jsx')

// visibility:visible keeps the prerendered text on screen without JS; GSAP only adds the motion.
const reveal = { distance: 28, duration: 0.55, threshold: 0.15, initialOpacity: 1, style: { visibility: 'visible' } }
const heroReveal = { distance: 40, duration: 0.8, trigger: 'mount', initialOpacity: 1, style: { visibility: 'visible' } }

const hasEmail = site.email !== PLACEHOLDER

export default function Home() {
  return (
    <Layout current="index.html">
      <section className="hero hero--landing">
        <Fx load={loadReveal} props={heroReveal}>
          <div className="page hero__body">
            <p className="eyebrow">Software Engineer · Rain</p>
            <h1><Text value={home.headline} /></h1>
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
          <div className="hero__media asset-placeholder" role="img" aria-label="Personal image — asset pending">
            <span>PERSONAL IMAGE</span>
            <small>Asset pending</small>
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
              </p>
              <div className="section__visual asset-placeholder" role="img" aria-label={`${section.title} image — asset pending`}>
                <span>{section.title.toUpperCase()}</span>
                <small>Asset pending</small>
              </div>
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
