import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import { contact, site, PLACEHOLDER } from '../content/index.js'

const hasEmail = site.email !== PLACEHOLDER

export default function Contact() {
  return (
    <Layout current="contact.html">
      <div className="page">
        <section className="hero">
          <h1>Contact</h1>
          <p className="lede">
            <Text value={contact.note} />
          </p>
        </section>

        <section className="section section--support stack on-support">
          <h2>Email</h2>
          {hasEmail ? (
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          ) : (
            <p>
              <Text value={PLACEHOLDER} />
            </p>
          )}
        </section>

        <section className="section stack">
          <h2>Profiles</h2>
          {site.links.length === 0 ? (
            <p>
              <Text value={PLACEHOLDER} />
            </p>
          ) : (
            <ul className="entries">
              {site.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} rel="noopener noreferrer" target="_blank">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </Layout>
  )
}
