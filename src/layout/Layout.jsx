import { site } from '../content/index.js'
import Text from '../components/Text.jsx'

const pages = [
  { href: 'index.html', label: 'Home' },
  { href: 'about.html', label: 'About' },
  { href: 'experience.html', label: 'Experience' },
  { href: 'blog.html', label: 'Writing' },
  { href: 'contact.html', label: 'Contact' },
]

export default function Layout({ current, children }) {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="wordmark" href="index.html">
          <Text value={site.name} />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <ul>
            {pages.map((page) => (
              <li key={page.href}>
                <a href={page.href} aria-current={page.href === current ? 'page' : undefined}>
                  {page.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="main">{children}</main>

      <footer className="site-footer">
        <div className="site-footer__top">
          <p className="wordmark">
            <Text value={site.name} />
          </p>
          <ul>
            {site.links.length === 0 && (
              <li>
                <Text value={site.tagline} />
              </li>
            )}
            {site.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} rel="noopener noreferrer" target="_blank">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p>
          <Text value={site.email} />
        </p>
      </footer>
    </>
  )
}
