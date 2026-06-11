'use client'

import { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Alleen op apparaten met een muis (geen touch)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current!
    const ring = ringRef.current!
    dot.style.display  = 'block'
    ring.style.display = 'block'

    let mx = 0, my = 0, rx = 0, ry = 0

    const onMouseMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top  = my + 'px'
    }

    const animate = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      ring.style.left = rx + 'px'
      ring.style.top  = ry + 'px'
      requestAnimationFrame(animate)
    }

    const onEnter = () => {
      dot.style.width  = '5px'
      dot.style.height = '5px'
      ring.style.width  = '64px'
      ring.style.height = '64px'
    }

    const onLeave = () => {
      dot.style.width  = '8px'
      dot.style.height = '8px'
      ring.style.width  = '44px'
      ring.style.height = '44px'
    }

    document.addEventListener('mousemove', onMouseMove)
    animate()

    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => document.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <>
      <div ref={dotRef}  className={styles.dot}  aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  )
}
