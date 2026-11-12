'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function FadeContent({
  children,
  duration = 0.55,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.12,
  initialOpacity = 0,
  blur = 0,
  trigger = 'scroll',
  once = true,
  className = '',
  style,
  ...props
}) {
  const ref = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    const context = gsap.context(() => {
      gsap.set(element, { visibility: 'visible' })
      if (reduced) return

      const from = { opacity: initialOpacity }
      const to = { opacity: 1, duration, delay, ease }
      if (blur) from.filter = `blur(${blur}px)`

      const reveal = () => gsap.fromTo(element, from, { ...to, filter: 'blur(0px)' })
      if (trigger === 'mount') {
        reveal()
        return
      }

      ScrollTrigger.create({
        trigger: element,
        start: `top ${Math.round((1 - threshold) * 100)}%`,
        once,
        onEnter: reveal,
        onEnterBack: once ? undefined : reveal
      })
    }, element)

    return () => context.revert()
  }, [blur, delay, duration, ease, initialOpacity, once, threshold, trigger])

  return <div ref={ref} className={className} style={{ visibility: 'visible', ...style }} {...props}>{children}</div>
}
