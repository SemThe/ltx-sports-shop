'use client'

import { useEffect, useRef } from 'react'
import styles from './Nav.module.css'

export default function Nav({ alwaysShowLogo = false }: { alwaysShowLogo?: boolean }) {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const nav = navRef.current!
    if (alwaysShowLogo) {
      nav.classList.add(styles.logoVisible)
      nav.classList.add(styles.scrolled)
    }
    const onScroll = () => {
      const pastHero = alwaysShowLogo || window.scrollY > window.innerHeight * 0.8
      nav.classList.toggle(styles.scrolled, alwaysShowLogo || window.scrollY > 72)
      nav.classList.toggle(styles.logoVisible, pastHero)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [alwaysShowLogo])

  return (
    <nav ref={navRef} className={styles.nav} aria-label="Hoofdnavigatie">
      <a href="/" className={styles.logo}>Slingshot</a>

      <ul className={styles.links} role="list">
        <li><a href="/kites">Kites</a></li>
        <li><a href="/#boards">Boards</a></li>
        <li><a href="/#gear">Gear</a></li>
        <li><a href="/#team">Team</a></li>
        <li><a href="/#about">Story</a></li>
      </ul>

      <a href="/kites" className={styles.shopBtn}>Shop Now</a>
    </nav>
  )
}
