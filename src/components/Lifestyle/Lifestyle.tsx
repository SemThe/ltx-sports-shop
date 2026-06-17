'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './Lifestyle.module.css'

// Pas hier de gallerij-items aan — Unsplash, vrij te gebruiken
const CELLS = [
  { img: 'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=700&auto=format&fit=crop', label: 'Morocco Sessions', title: 'Catching Air',   tall: true },
  { img: 'https://images.unsplash.com/photo-1657099021453-9a603c6e0328?q=80&w=800&auto=format&fit=crop', label: 'Tarifa, Spain',    title: 'Wave Riding'              },
  { img: 'https://images.unsplash.com/photo-1585568742363-a0eaf4e7d290?q=80&w=600&auto=format&fit=crop'                                                               },
  { img: 'https://images.unsplash.com/photo-1688904851329-c41d0a57f536?q=80&w=800&auto=format&fit=crop', label: 'Zanzibar',         title: 'Built Precise'            },
  { img: 'https://images.unsplash.com/photo-1467363810413-4e5d104a734f?q=80&w=600&auto=format&fit=crop'                                                               },
] as const

const MARQUEE_WORDS = ['Performance', 'Wind', 'Freedom', 'Speed', 'Control', 'Power', 'Altitude', 'Ocean']

export default function Lifestyle() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Parallax per afbeelding
      document.querySelectorAll<HTMLElement>('.lifestyle-cell').forEach((cell, i) => {
        const img = cell.querySelector('img')
        if (!img) return
        const dir = i % 2 === 0 ? -10 : 10
        gsap.fromTo(
          img,
          { yPercent: Math.abs(dir) * 0.5 },
          {
            yPercent: -Math.abs(dir) * 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: cell,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.8,
            },
          }
        )
      })

      // Titel reveal
      gsap.from('.lifestyle-title', {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} aria-label="Lifestyle gallery">

      <div className={styles.header}>
        <h2 className={`${styles.title} lifestyle-title`}>
          Live<br />The Wind
        </h2>
        <p className={styles.desc}>
          Van Morocco tot Tarifa — onze riders pushen de grenzen van wind en water.
        </p>
      </div>

      <div className={styles.grid}>
        {CELLS.map((cell, i) => (
          <div
            key={i}
            className={`${styles.cell} ${'tall' in cell && cell.tall ? styles.cellTall : ''} lifestyle-cell`}
          >
            <Image
              src={cell.img}
              alt={'title' in cell ? cell.title ?? '' : ''}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.scrim} aria-hidden="true" />
            {'label' in cell && cell.label && (
              <div className={styles.cap}>
                <span className={styles.capLabel}>{cell.label}</span>
                {'title' in cell && cell.title && (
                  <h3 className={styles.capTitle}>{cell.title}</h3>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Marquee tekstband */}
      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <span
              key={i}
              className={`${styles.marqueeWord} ${i % 2 !== 0 ? styles.marqueeWordSolid : ''}`}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
