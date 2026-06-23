'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap, ScrollTrigger } from '@/lib/gsap'
import styles from './Products.module.css'

type Product = {
  id: string
  tag: string
  name: string
  price: string
  img: string
  hero?: boolean
  badge?: string
  badgeOutline?: boolean
  href?: string
}

// Pas hier de producten aan — img = placeholder actiefoto (Unsplash, vrij te gebruiken)
const PRODUCTS: Product[] = [
  {
    id: 'rpm',
    tag: 'Freeride / Wake',
    name: 'RPM Kite',
    price: 'From €1,299',
    badge: 'Bestseller',
    badgeOutline: false,
    img: 'https://images.unsplash.com/photo-1747644575755-6a2e5e21291a?q=80&w=900&auto=format&fit=crop',
    hero: true,
    href: '/kites/rpm',
  },
  {
    id: 'refraction',
    tag: 'Twin-Tip',
    name: 'Refraction',
    price: '€699',
    img: 'https://images.unsplash.com/photo-1780754001443-d706281f4e16?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'compstick',
    tag: 'Control Bar',
    name: 'Compstick',
    price: '€389',
    img: 'https://images.unsplash.com/photo-1684082750351-26e3fa5afc89?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'vision',
    tag: 'Wave / Strapless',
    name: 'Vision',
    price: 'From €1,199',
    img: 'https://images.unsplash.com/photo-1753637986510-80bf5810d949?q=80&w=800&auto=format&fit=crop',
    href: '/kites/vision',
  },
  {
    id: 'hoverglide',
    tag: 'Hydrofoil',
    name: 'Hover Glide',
    price: 'From €1,599',
    badge: 'Foiling',
    badgeOutline: true,
    img: 'https://images.unsplash.com/photo-1733757276564-8762b8d63498?q=80&w=800&auto=format&fit=crop',
  },
]

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
          <Link href="/kites" className={styles.viewAll}>
            View all kites <span className={styles.arrow}>→</span>
          </Link>
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
          {PRODUCTS.map((p) => {
            const cardClass = `${styles.card} ${p.hero ? styles.cardHero : styles.cardSm} pcard`
            const inner = (
              <>
                <div className={styles.cardImg}>
                  <Image
                    src={p.img}
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
              </>
            )
            return p.href ? (
              <Link key={p.id} href={p.href} className={cardClass} data-cursor-hover>
                {inner}
              </Link>
            ) : (
              <article key={p.id} className={cardClass} tabIndex={0} data-cursor-hover>
                {inner}
              </article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
