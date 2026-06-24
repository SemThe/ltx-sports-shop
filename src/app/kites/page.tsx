'use client'

import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { KITES } from '@/lib/kites'
import styles from './page.module.css'

const HERO_IMG = 'https://images.unsplash.com/photo-1607537825952-48c2142007ae?q=80&w=2400&auto=format&fit=crop'

export default function KitesPage() {
  return (
    <>
      <Nav alwaysShowLogo />
      <main className={styles.main}>

        {/* Hero header with background image */}
        <div className={styles.heroSection}>
          <div className={styles.heroImgContainer}>
            <Image
              src={HERO_IMG}
              alt="Kitesurfer in actie"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
            />
            <div className={styles.heroOverlay} />
          </div>

          {/* Back to home */}
          <div className={styles.topBar}>
            <Link href="/" className={styles.backBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Terug naar home
            </Link>
          </div>

          {/* Page header */}
          <header className={styles.header}>
            <p className={styles.headerEyebrow}>Slingshot Kites</p>
            <h1 className={styles.headerTitle}>
              The<br />Kite<br />Collection
            </h1>
            <div className={styles.headerMeta}>
              <span className={styles.headerCount}>{String(KITES.length).padStart(2, '0')} kites</span>
              <p className={styles.headerSub}>
                Each kite is shaped for a specific style of riding. Find yours.
              </p>
            </div>
          </header>
        </div>

        {/* Kite list */}
        <ul className={styles.list} role="list">
          {KITES.map((kite, i) => (
            <li key={kite.id} className={styles.item}>
              <Link href={`/kites/${kite.id}`} className={styles.row}>

                {/* Index number */}
                <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>

                {/* Image */}
                <div className={styles.imgWrap}>
                  <Image
                    src={kite.heroImg}
                    alt={kite.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    style={{ objectFit: 'cover' }}
                    className={styles.img}
                  />
                </div>

                {/* Info */}
                <div className={styles.info}>
                  <p className={styles.infoCategory}>{kite.category}</p>
                  <h2 className={styles.infoName}>{kite.name}</h2>
                  <p className={styles.infoTagline}>{kite.tagline}</p>
                  <div className={styles.infoBottom}>
                    <span className={styles.infoPrice}>{kite.price}</span>
                    <span className={`${styles.levelBadge} ${styles[`level${kite.level}`]}`}>{kite.level}</span>
                    {kite.badge && (
                      <span className={styles.badge}>{kite.badge}</span>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className={styles.arrow} aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

              </Link>
            </li>
          ))}
        </ul>

      </main>
      <Footer />
    </>
  )
}
