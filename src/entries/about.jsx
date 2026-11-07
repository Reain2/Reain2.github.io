import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "../styles/base.css"
import About from "../pages/About.jsx"

const container = document.getElementById("root")
const app = (
  <StrictMode>
    <About />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
