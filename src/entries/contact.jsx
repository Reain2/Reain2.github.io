import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "../styles/base.css"
import Contact from "../pages/Contact.jsx"

const container = document.getElementById("root")
const app = (
  <StrictMode>
    <Contact />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
