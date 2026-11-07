import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Experience from './pages/Experience.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import NotFound from './pages/NotFound.jsx'

const pages = {
  'index.html': Home,
  'about.html': About,
  'experience.html': Experience,
  'contact.html': Contact,
  'blog.html': Blog,
  '404.html': NotFound,
}

export function renderPage(file) {
  return renderToString(createElement(pages[file]))
}

export const pageFiles = Object.keys(pages)
