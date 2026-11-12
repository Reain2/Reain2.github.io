import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import { experience, PLACEHOLDER } from '../content/index.js'

const groups = [
  { key: 'education', title: 'Education' },
  { key: 'work', title: 'Experience and activities' },
  { key: 'achievements', title: 'Achievements and awards' },
  { key: 'certifications', title: 'Certifications' },
  { key: 'skills', title: 'Skills' },
]

export default function Experience() {
  return (
    <Layout current="experience.html">
      <div className="page">
        <section className="hero page-hero">
          <h1>Experience</h1>
          <p className="lede">Education, activities and milestones so far.</p>
        </section>

        {groups.map((group) => {
          const items = experience[group.key]
          return (
            <section key={group.key} className="section stack">
              <h2>{group.title}</h2>
              {items.length === 0 ? (
                <p>
                  <Text value={PLACEHOLDER} />
                </p>
              ) : (
                <div className="entries">
                  {items.map((item) => (
                    <article key={item.title} className="entry stack">
                      <h3>{item.title}</h3>
                      <p className="entry-meta">
                        {[item.organisation, item.date].filter(Boolean).join(' · ')}
                      </p>
                      <p>
                        <Text value={item.body} />
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )
        })}
      </div>
    </Layout>
  )
}
