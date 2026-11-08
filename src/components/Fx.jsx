import { useEffect, useState } from 'react'

// Loads an effect component after first paint so prerendered text stays the LCP element.
// Falls back to the children as plain markup when JS is off, the chunk fails, or motion is reduced.
// ponytail: idle-scheduled single chunk. Add modulepreload only if field data shows it arriving late.
export default function Fx({ load, props, query, children }) {
  const [Cmp, setCmp] = useState(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    if (query && !window.matchMedia(query).matches) return undefined

    let live = true
    const run = () => {
      load().then(
        (mod) => live && setCmp(() => mod.default),
        () => {},
      )
    }
    const idle = window.requestIdleCallback
    const handle = idle ? idle(run, { timeout: 2500 }) : setTimeout(run, 300)

    return () => {
      live = false
      if (idle) window.cancelIdleCallback?.(handle)
      else clearTimeout(handle)
    }
  }, [load, query])

  if (!Cmp) return children ?? null
  return <Cmp {...props}>{children}</Cmp>
}
