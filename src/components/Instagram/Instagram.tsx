'use client'

import Image from 'next/image'
import styles from './Instagram.module.css'

const POSTS_A = [
  { img: 'https://images.unsplash.com/photo-1601144378611-48eb4755a8c8?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kiter in de lucht' },
  { img: 'https://images.unsplash.com/photo-1657099021453-9a603c6e0328?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kitesurfer op het water' },
  { img: 'https://images.unsplash.com/photo-1747644575755-6a2e5e21291a?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kite actie shot' },
  { img: 'https://images.unsplash.com/photo-1585568742363-a0eaf4e7d290?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kiteboarden cinematic' },
  { img: 'https://images.unsplash.com/photo-1780754001443-d706281f4e16?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kite freestyle' },
  { img: 'https://images.unsplash.com/photo-1688904851329-c41d0a57f536?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kiten in Zanzibar' },
  { img: 'https://images.unsplash.com/photo-1684082750351-26e3fa5afc89?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kitesport actie' },
  { img: 'https://images.unsplash.com/photo-1467363810413-4e5d104a734f?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kiteboarder silhouet' },
  { img: 'https://images.unsplash.com/photo-1733757276564-8762b8d63498?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Foilkite actie' },
  { img: 'https://images.unsplash.com/photo-1502200893034-b7bca90610ef?q=80&w=600&h=750&auto=format&fit=crop', alt: 'Kite in de lucht' },
]

// Second row — reversed order for visual variety
const POSTS_B = [...POSTS_A].reverse()

function PostCard({ post }: { post: (typeof POSTS_A)[number] }) {
  return (
    <a
      href="https://www.instagram.com/slingshotkite/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
      aria-label={`Bekijk op Instagram: ${post.alt}`}
    >
      <div className={styles.imgWrap}>
        <Image
          src={post.img}
          alt={post.alt}
          fill
          sizes="280px"
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} aria-hidden="true">
          <svg className={styles.heart} viewBox="0 0 24 24" fill="white" aria-hidden="true">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"/>
          </svg>
        </div>
      </div>
    </a>
  )
}

export default function Instagram() {
  return (
    <section className={styles.section} aria-label="Instagram feed">

      <div className={styles.sectionHeader}>
        <p className={styles.eyebrow}>On Our Socials</p>
        <div className={styles.igMeta}>
          <svg className={styles.igIcon} viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
          </svg>
          <a
            href="https://www.instagram.com/slingshotkite/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.handle}
          >
            @slingshotkite
          </a>
          <a
            href="https://www.instagram.com/slingshotkite/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.followBtn}
          >
            Follow
          </a>
        </div>
      </div>

      {/* Strip 1 — left */}
      <div className={styles.strip}>
        <div className={styles.track}>
          {[...POSTS_A, ...POSTS_A].map((post, i) => (
            <PostCard key={`a-${i}`} post={post} />
          ))}
        </div>
      </div>

      {/* Strip 2 — right */}
      <div className={styles.strip}>
        <div className={`${styles.track} ${styles.trackReverse}`}>
          {[...POSTS_B, ...POSTS_B].map((post, i) => (
            <PostCard key={`b-${i}`} post={post} />
          ))}
        </div>
      </div>

    </section>
  )
}
