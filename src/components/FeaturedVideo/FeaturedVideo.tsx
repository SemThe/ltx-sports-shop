'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap } from '@/lib/gsap'
import styles from './FeaturedVideo.module.css'

const FEATURED_VIDEO_ID = 'IGgRW1jKCIg'

export default function FeaturedVideo() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

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

          {isPlaying ? (
            <iframe
              className={styles.iframe}
              src={`https://www.youtube.com/embed/${FEATURED_VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title="Slingshot featured video"
              allow="autoplay; encrypted-media; fullscreen"
              allowFullScreen
              frameBorder="0"
            />
          ) : (
            <>
              <div className="fv-img" style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}>
                <Image
                  src="https://images.unsplash.com/photo-1650199117820-037db2979b5a?q=80&w=1440&auto=format&fit=crop"
                  alt="Slingshot kite in de lucht"
                  fill
                  sizes="100vw"
                  style={{ objectFit: 'cover', filter: 'brightness(0.65)' }}
                />
              </div>

              <div className={styles.overlay}>
                <button
                  className={styles.playBtn}
                  aria-label="Video afspelen"
                  onClick={() => setIsPlaying(true)}
                >
                  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8 5v14l11-7z" fill="white" />
                  </svg>
                </button>
              </div>

              <div className={styles.videoTitle}>
                <h2>See the World<br />From Above</h2>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  )
}
