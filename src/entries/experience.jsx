import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "../styles/base.css"
import Experience from "../pages/Experience.jsx"

const container = document.getElementById("root")
const app = (
  <StrictMode>
    <Experience />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
