'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './Hero.module.css'

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Beginstand instellen
      gsap.set(['.hero-label', '.hero-sub', '.hero-actions', '.hero-scroll'], {
        opacity: 0,
        y: 22,
      })

      // Titel reveal
      const tl = gsap.timeline({ delay: 0.15 })
      tl.to('.hero-line-inner', {
        y: '0%',
        duration: 1.15,
        ease: 'power4.out',
        stagger: 0.11,
      })
        .to('.hero-label', { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to('.hero-sub',   { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to('.hero-actions', { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to('.hero-scroll', { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')

      // Parallax achtergrond
      gsap.to('.hero-bg', {
        yPercent: 22,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.hero} id="top" aria-label="Hero">

      {/* Achtergrond afbeelding — vervang src met jouw eigen foto */}
      <div className={`${styles.bg} hero-bg`}>
        <Image
          src="https://picsum.photos/seed/kiteboard-ocean-aerial-jump/1920/1080"
          alt="Kiteboarder boven de oceaan"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'brightness(0.62) contrast(1.08)' }}
        />
      </div>

      <div className={styles.content}>
        <p className={`${styles.label} hero-label`}>Performance Kiteboarding</p>

        <h1 className={styles.title} aria-label="Slingshot — Engineered For Wind">
          <span className={styles.line}>
            <span className={`${styles.lineInner} hero-line-inner`}>Slingshot</span>
          </span>
          <span className={styles.line}>
            <span className={`${styles.lineInner} ${styles.lineInnerDim} hero-line-inner`}>Engineered</span>
          </span>
          <span className={styles.line}>
            <span className={`${styles.lineInner} hero-line-inner`}>For Wind.</span>
          </span>
        </h1>

        <p className={`${styles.sub} hero-sub`}>
          Performance without limits. Built for riders who push beyond the horizon.
        </p>

        <div className={`${styles.actions} hero-actions`}>
          <a href="#kites" className="btn-solid">Shop Kites</a>
          <a href="#about" className="btn-ghost">Explore Collection</a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`${styles.scrollIndicator} hero-scroll`} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>

    </section>
  )
}
