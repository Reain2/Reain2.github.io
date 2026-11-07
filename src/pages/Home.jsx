import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import { home } from '../content/index.js'

export default function Home() {
  return (
    <Layout current="index.html">
      <div className="page">
        <section className="hero">
          <h1>
            <Text value={home.headline} />
          </h1>
          <p className="lede">
            <Text value={home.intro} />
          </p>
        </section>

        <div className="entries">
          {home.sections.map((section) => (
            <section key={section.title} className="entry stack">
              <h2>{section.title}</h2>
              <p>
                <Text value={section.body} />
              </p>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  )
}
