import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "../styles/base.css"
import Blog from "../pages/Blog.jsx"

const container = document.getElementById("root")
const app = (
  <StrictMode>
    <Blog />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
