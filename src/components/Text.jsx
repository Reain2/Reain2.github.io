import { PLACEHOLDER } from '../content/index.js'

export default function Text({ value }) {
  if (value === PLACEHOLDER) {
    return <span className="placeholder">{PLACEHOLDER}</span>
  }
  return value
}
