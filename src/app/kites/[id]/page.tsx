'use client'

import { use, useState } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import { getKiteById, KITES } from '@/lib/kites'
import styles from './page.module.css'

export default function KiteDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const kite = getKiteById(id)
  if (!kite) notFound()

  const [activeSize, setActiveSize] = useState(kite.sizes[1] ?? kite.sizes[0])
  const [activeImg, setActiveImg] = useState(0)

  const related = KITES.filter((k) => k.id !== kite.id).slice(0, 3)

  return (
    <>
      <Nav alwaysShowLogo />
      <main className={styles.main}>

        {/* Top nav bar with back button + breadcrumb */}
        <div className={styles.topBar}>
          <Link href="/kites" className={styles.backBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L11 18M5 12L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Terug naar kites
          </Link>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/" className={styles.breadcrumbLink}>Home</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <Link href="/kites" className={styles.breadcrumbLink}>Kites</Link>
            <span className={styles.breadcrumbSep}>/</span>
            <span className={styles.breadcrumbCurrent}>{kite.name}</span>
          </nav>
        </div>

        {/* Two-column layout */}
        <div className={styles.layout}>

          {/* LEFT — Photo gallery */}
          <div className={styles.gallery}>

            {/* Main image */}
            <div className={styles.galleryMain}>
              <Image
                src={kite.images[activeImg]}
                alt={`${kite.name} — foto ${activeImg + 1}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                style={{ objectFit: 'cover' }}
                className={styles.galleryMainImg}
              />
              {kite.badge && (
                <span className={styles.heroBadge}>{kite.badge}</span>
              )}
            </div>

            {/* Thumbnails */}
            <div className={styles.thumbs}>
              {kite.images.map((src, i) => (
                <button
                  key={i}
                  className={`${styles.thumb} ${activeImg === i ? styles.thumbActive : ''}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Foto ${i + 1}`}
                >
                  <Image
                    src={src}
                    alt={`${kite.name} thumbnail ${i + 1}`}
                    fill
                    sizes="120px"
                    style={{ objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>

          </div>

          {/* RIGHT — Product info (sticky) */}
          <div className={styles.infoPanel}>
            <div className={styles.infoPanelInner}>

              <p className={styles.category}>{kite.category}</p>
              <h1 className={styles.name}>{kite.name}</h1>
              <p className={styles.tagline}>{kite.tagline}</p>

              <div className={styles.priceLine}>
                <span className={styles.price}>{kite.price}</span>
                {kite.priceNote && (
                  <span className={styles.priceNote}>{kite.priceNote}</span>
                )}
              </div>

              <p className={styles.description}>{kite.description}</p>

              {/* Size selector */}
              <div className={styles.sizeBlock}>
                <p className={styles.sizeLabel}>
                  Size
                  <span className={styles.sizeActive}> — {activeSize}</span>
                </p>
                <div className={styles.sizes}>
                  {kite.sizes.map((s) => (
                    <button
                      key={s}
                      className={`${styles.sizeBtn} ${activeSize === s ? styles.sizeBtnActive : ''}`}
                      onClick={() => setActiveSize(s)}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className={styles.ctas}>
                <button className="btn-solid">Add to Cart</button>
                <a href="mailto:info@ltxsports.nl" className="btn-ghost">Contact for Order</a>
              </div>

              {/* Specs */}
              <div className={styles.specs}>
                <p className={styles.specsTitle}>Specifications</p>
                <dl className={styles.specsList}>
                  {kite.specs.map((spec) => (
                    <div key={spec.label} className={styles.specRow}>
                      <dt className={styles.specLabel}>{spec.label}</dt>
                      <dd className={styles.specValue}>{spec.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

            </div>
          </div>

        </div>

        {/* Long description */}
        <section className={styles.longDesc}>
          <div className={styles.longDescInner}>
            <p className={styles.longDescEyebrow}>About this kite</p>
            <p className={styles.longDescText}>{kite.longDescription}</p>
          </div>
        </section>

        {/* Related kites */}
        <section className={styles.related}>
          <div className={styles.relatedInner}>
            <h2 className={styles.relatedTitle}>More Kites</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link key={r.id} href={`/kites/${r.id}`} className={styles.relatedCard}>
                  <div className={styles.relatedImg}>
                    <Image
                      src={r.heroImg}
                      alt={r.name}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                      className={styles.relatedImgEl}
                    />
                  </div>
                  <div className={styles.relatedInfo}>
                    <p className={styles.relatedCategory}>{r.category}</p>
                    <h3 className={styles.relatedName}>{r.name}</h3>
                    <p className={styles.relatedPrice}>{r.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
