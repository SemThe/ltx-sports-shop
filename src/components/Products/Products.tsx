'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './Products.module.css'

type Product = {
  id: string
  tag: string
  name: string
  price: string
  imgSeed: string
  hero?: boolean
  badge?: string
  badgeOutline?: boolean
}

// Pas hier de producten aan
const PRODUCTS: Product[] = [
  {
    id: 'rpm',
    tag: 'Freeride / Wake',
    name: 'RPM Kite',
    price: 'From €1.299',
    badge: 'New 2025',
    badgeOutline: false,
    imgSeed: 'slingshot-rpm-kite-blue-sky',
    hero: true,
  },
  {
    id: 'refraction',
    tag: 'Twin-Tip',
    name: 'Refraction',
    price: '€699',
    imgSeed: 'kiteboard-carbon-water-splash',
  },
  {
    id: 'compstick',
    tag: 'Control Bar',
    name: 'Compstick',
    price: '€389',
    imgSeed: 'kite-bar-control-system-blue',
  },
  {
    id: 'vision',
    tag: 'Wave / Strapless',
    name: 'Vision',
    price: 'From €1.199',
    imgSeed: 'wave-kite-ocean-spray-action',
  },
  {
    id: 'hoverglide',
    tag: 'Hydrofoil',
    name: 'Hover Glide',
    price: 'From €1.599',
    badge: 'Foiling',
    badgeOutline: true,
    imgSeed: 'hydrofoil-board-flying-water',
  },
] as const

const TABS = ['Kites', 'Boards', 'Bars', 'Foils', 'Accessories']

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeTab, setActiveTab] = useState(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.set('.pcard', { opacity: 0, y: 60 })

      ScrollTrigger.batch('.pcard', {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            stagger: 0.1,
          }),
        start: 'top 85%',
        once: true,
      })

      gsap.from('.products-title', {
        opacity: 0,
        y: 48,
        duration: 0.88,
        ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 87%', once: true },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.section} id="kites">
      <div className={styles.inner}>

        <div className={styles.head}>
          <h2 className={`${styles.title} products-title`}>
            The<br />Collection
          </h2>
          <a href="#" className={styles.viewAll}>
            View all <span className={styles.arrow}>→</span>
          </a>
        </div>

        {/* Categorie tabs */}
        <div className={styles.tabs} role="tablist" aria-label="Productcategorieën">
          {TABS.map((tab, i) => (
            <button
              key={tab}
              role="tab"
              aria-selected={activeTab === i}
              className={`${styles.tab} ${activeTab === i ? styles.tabActive : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Productgrid */}
        <div className={styles.grid}>
          {PRODUCTS.map((p) => (
            <article
              key={p.id}
              className={`${styles.card} ${'hero' in p && p.hero ? styles.cardHero : styles.cardSm} pcard`}
              tabIndex={0}
              data-cursor-hover
            >
              <div className={styles.cardImg}>
                <Image
                  src={`https://picsum.photos/seed/${p.imgSeed}/${'hero' in p && p.hero ? '600/900' : '500/380'}`}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {p.badge && (
                <span className={`${styles.badge} ${p.badgeOutline ? styles.badgeOutline : ''}`}>
                  {p.badge}
                </span>
              )}

              <div className={styles.scrim} aria-hidden="true" />

              <div className={styles.info}>
                <p className={styles.infoTag}>{p.tag}</p>
                <h3 className={styles.infoName}>{p.name}</h3>
                <p className={styles.infoPrice}>{p.price}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
