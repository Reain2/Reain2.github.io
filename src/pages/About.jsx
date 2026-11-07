import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import { about } from '../content/index.js'

export default function About() {
  return (
    <Layout current="about.html">
      <div className="page">
        <section className="hero">
          <h1>About</h1>
          <p className="lede">
            <Text value={about.intro} />
          </p>
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
