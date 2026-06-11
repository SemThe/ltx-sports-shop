'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './Story.module.css'

// Pas hier de statistieken aan
const STATS = [
  { count: 22,  suffix: '+', label: 'Years of Innovation' },
  { count: 60,  suffix: '+', label: 'Countries Worldwide' },
  { count: 140, suffix: '+', label: 'Products Crafted'    },
  { count: 47,  suffix: '',  label: 'World Titles Won'    },
]

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null)
  const statRefs   = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      if (!prefersReduced) {
        gsap.from('.story-headline', {
          opacity: 0,
          y: 48,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 87%', once: true },
        })
      }

      // Count-up animatie
      ScrollTrigger.create({
        trigger: `.${styles.grid}`,
        start: 'top 82%',
        once: true,
        onEnter: () => {
          STATS.forEach((stat, i) => {
            const el = statRefs.current[i]
            if (!el) return
            if (prefersReduced) {
              el.textContent = stat.count + stat.suffix
              return
            }
            const obj = { n: 0 }
            gsap.to(obj, {
              n: stat.count,
              duration: 2.2,
              ease: 'power2.out',
              onUpdate() {
                el.textContent = Math.round(obj.n) + stat.suffix
              },
            })
          })
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} id="about">
      <div className={styles.inner}>

        <p className={styles.pre}>Our Story</p>

        <p className={`${styles.headline} story-headline`}>
          For over two decades, Slingshot has been creating gear for riders{' '}
          <span className={styles.muted}>who live for wind, water</span>
          {' '}and progression.
        </p>

        <div className={styles.rule} aria-hidden="true" />

        <div className={styles.grid}>
          {STATS.map((stat, i) => (
            <div key={stat.label}>
              <div
                className={styles.statNum}
                ref={(el) => { statRefs.current[i] = el }}
              >
                {stat.count}{stat.suffix}
              </div>
              <div className={styles.statLbl}>{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
