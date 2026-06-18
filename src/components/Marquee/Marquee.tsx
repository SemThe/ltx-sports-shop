import styles from './Marquee.module.css'

const WORDS = ['Performance', 'Wind', 'Freedom', 'Speed', 'Control', 'Power', 'Altitude', 'Ocean']

export default function Marquee() {
  return (
    <div className={styles.marquee} aria-hidden="true">
      <div className={styles.track}>
        {[...WORDS, ...WORDS].map((word, i) => (
          <span key={i} className={`${styles.word} ${i % 2 !== 0 ? styles.wordSolid : ''}`}>
            {word}
          </span>
        ))}
      </div>
    </div>
  )
}
