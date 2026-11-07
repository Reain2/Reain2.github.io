import Layout from '../layout/Layout.jsx'
import Text from '../components/Text.jsx'
import { blog, PLACEHOLDER } from '../content/index.js'

export default function Blog() {
  return (
    <Layout current="blog.html">
      <div className="page">
        <section className="hero">
          <h1>Writing</h1>
          <p className="lede">
            <Text value={blog.intro} />
          </p>
        </section>

        <section className="section stack">
          {blog.posts.length === 0 ? (
            <p>
              <Text value={PLACEHOLDER} />
            </p>
          ) : (
            <div className="entries">
              {blog.posts.map((post) => (
                <article key={post.href} className="entry stack">
                  <h2>
                    <a href={post.href}>{post.title}</a>
                  </h2>
                  <p className="entry-meta">{post.date}</p>
                  <p>{post.summary}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  )
}
