import { StrictMode } from "react"
import { createRoot, hydrateRoot } from "react-dom/client"
import "../styles/base.css"
import NotFound from "../pages/NotFound.jsx"

const container = document.getElementById("root")
const app = (
  <StrictMode>
    <NotFound />
  </StrictMode>
)

if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
