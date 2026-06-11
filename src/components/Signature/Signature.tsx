'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './Signature.module.css'

// Pas hier de specs aan
const SPECS = [
  { value: '2.4x',  label: 'Wind Range Ratio' },
  { value: '340g',  label: 'Canopy Weight'     },
  { value: '7-19m', label: 'Available Sizes'   },
  { value: '22yr',  label: 'Of Engineering'    },
]

export default function Signature() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.from('.sig-img', {
        scale: 1.14,
        duration: 1.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      ScrollTrigger.batch('.sig-reveal', {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            ease: 'power3.out',
            stagger: 0.1,
          }),
        start: 'top 87%',
        once: true,
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} id="boards" aria-labelledby="sig-title">

      <div className={styles.left}>
        <p className={`${styles.eyebrow} sig-reveal`} style={{ opacity: 0 }}>
          Signature Collection 2025
        </p>

        <h2
          className={`${styles.title} sig-reveal`}
          id="sig-title"
          style={{ opacity: 0, transform: 'translateY(48px)' }}
        >
          Designed for riders<br />who push{' '}
          <span className={styles.muted}>beyond<br />limits.</span>
        </h2>

        <p
          className={`${styles.body} sig-reveal`}
          style={{ opacity: 0, transform: 'translateY(48px)' }}
        >
          De RPM-serie herdefiniëert wat een freeride kite kan zijn. Delta-Hybrid geometrie
          gecombineerd met Variable Arc Canopy technologie levert ongeëvenaarde prestaties
          over alle windcondities.
        </p>

        <div
          className={`${styles.specs} sig-reveal`}
          style={{ opacity: 0, transform: 'translateY(48px)' }}
        >
          {SPECS.map((s) => (
            <div key={s.label}>
              <div className={styles.specVal}>{s.value}</div>
              <div className={styles.specLbl}>{s.label}</div>
            </div>
          ))}
        </div>

        <div
          className="sig-reveal"
          style={{ opacity: 0, transform: 'translateY(48px)' }}
        >
          <a href="#" className="btn-solid">Shop RPM Series</a>
        </div>
      </div>

      <div className={styles.right} aria-hidden="true">
        <div className="sig-img" style={{ width: '100%', height: '100%', position: 'relative' }}>
          <Image
            src="https://picsum.photos/seed/slingshot-rpm-kite-action-vertical/800/1000"
            alt="Slingshot RPM Kite in actie"
            fill
            sizes="50vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <span className={styles.rightLabel}>RPM 2025</span>
      </div>

    </section>
  )
}
