'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import styles from './FeaturedVideo.module.css'

export default function FeaturedVideo() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.fv-img',
        { scale: 1.1 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center center',
            scrub: 1.8,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Featured video">
      <div className={styles.inner}>
        <div className={styles.wrap}>

          {/* Vervang src door een echte video thumbnail of embed */}
          <div className="fv-img" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
            <Image
              src="https://picsum.photos/seed/kiteboard-cinematic-wide-ocean/1440/810"
              alt="Cinematische kiteboarding sessie"
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', filter: 'brightness(0.65)' }}
            />
          </div>

          <div className={styles.overlay}>
            <button className={styles.playBtn} aria-label="Video afspelen">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M8 5v14l11-7z" fill="white" />
              </svg>
            </button>
          </div>

          <div className={styles.videoTitle}>
            <h2>See the World<br />From Above</h2>
          </div>

        </div>
      </div>
    </section>
  )
}
