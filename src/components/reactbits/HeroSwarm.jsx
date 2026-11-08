import SwarmCursor from './SwarmCursor.jsx'

// Colours are read from tokens.css so no hex lives in a component.
const token = (name) => getComputedStyle(document.documentElement).getPropertyValue(name).trim()

export default function HeroSwarm() {
  return (
    <SwarmCursor
      className="hero__swarm"
      count={420}
      size={2.2}
      spread={110}
      swirl={0.5}
      wander={0.35}
      tail={0.45}
      depth={0.6}
      intro
      targets=""
      color={token('--accent')}
      accentColor={token('--ink-on-ground')}
    />
  )
}
