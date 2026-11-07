import Layout from '../layout/Layout.jsx'
import { notFound } from '../content/index.js'

export default function NotFound() {
  return (
    <Layout current="404.html">
      <div className="page">
        <section className="hero stack">
          <h1>{notFound.heading}</h1>
          <p className="lede">{notFound.body}</p>
          <p>
            <a href="index.html">Back to the home page</a>
          </p>
        </section>
      </div>
    </Layout>
  )
}
