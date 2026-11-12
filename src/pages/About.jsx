import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import { about } from '../content/index.js'
import portrait from '../assets/profile/rain-potrait.webp'

export default function About() {
  return (
    <Layout current="about.html">
      <div className="page">
        <section className="hero page-hero about-hero">
          <h1>About Rain</h1>
          <div className="about-hero__content">
            <p className="lede">
              <Text value={about.intro} />
            </p>
          </div>
          <figure className="portrait">
            <img src={portrait} alt="Portrait of Rain" loading="eager" />
          </figure>
        </section>

        {about.story.map((block) => (
          <section key={block.heading} className="section stack">
            <h2>{block.heading}</h2>
            <p>
              <Text value={block.body} />
            </p>
          </section>
        ))}
      </div>
    </Layout>
  )
}
