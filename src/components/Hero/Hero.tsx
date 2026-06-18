'use client'

import { useEffect, useRef } from 'react'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './Hero.module.css'

const HERO_VIDEO_ID = 'icWkZLMOcwk'

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null)
  const playerDivRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // YouTube Player API — forceert autoplay zodat de play-knop nooit verschijnt
    const initPlayer = () => {
      if (!playerDivRef.current) return
      new window.YT.Player(playerDivRef.current, {
        videoId: HERO_VIDEO_ID,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: HERO_VIDEO_ID,
          controls: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (e: any) => e.target.playVideo(),
        },
      })
    }

    if (window.YT?.Player) {
      initPlayer()
    } else {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      document.head.appendChild(tag)
      window.onYouTubeIframeAPIReady = initPlayer
    }
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.set(['.hero-label', '.hero-sub', '.hero-actions', '.hero-scroll'], { opacity: 0, y: 22 })

      const tl = gsap.timeline({ delay: 0.15 })
      tl.to('.hero-line-inner', { y: '0%', duration: 1.15, ease: 'power4.out', stagger: 0.11 })
        .to('.hero-label',   { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to('.hero-sub',     { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to('.hero-actions', { opacity: 1, y: 0, duration: 0.75, ease: 'power3.out' }, '-=0.55')
        .to('.hero-scroll',  { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')

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

      <div className={`${styles.bg} hero-bg`}>
        <div className={styles.bgVideoWrap}>
          <div ref={playerDivRef} className={styles.bgVideo} />
        </div>
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

      <div className={`${styles.scrollIndicator} hero-scroll`} aria-hidden="true">
        <div className={styles.scrollLine} />
      </div>

    </section>
  )
}
