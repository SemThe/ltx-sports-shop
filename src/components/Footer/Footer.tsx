// Server component — geen 'use client' nodig
import styles from './Footer.module.css'

const LINKS = {
  Shop:         ['Kites', 'Boards', 'Bars', 'Foils', 'Accessories', 'Wetsuits'],
  Technology:   ['VAC System', 'Delta Hybrid', 'Foil Tech', 'R&D Lab'],
  'Team Riders':['Tom Hebert', 'Karolina Winkowska', 'Ruben Lenten', 'Lewis Crathern', 'All Riders'],
  About:        ['Our Story', 'Sustainability', 'Dealers', 'Contact', 'Careers'],
}

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.inner}>

        <div className={styles.top}>

          {/* Merkkolom */}
          <div className={styles.brand}>
            <p className={styles.brandName}>Slingshot</p>
            <p className={styles.brandText}>
              Engineering the world&apos;s finest kites, boards and foils since 2001.
              Built for those who demand more from wind and water.
            </p>
            <div className={styles.socials} aria-label="Social media">
              {[['IG', 'Instagram'], ['YT', 'YouTube'], ['FB', 'Facebook'], ['TK', 'TikTok']].map(
                ([label, name]) => (
                  <a key={label} href="#" className={styles.social} aria-label={name}>
                    {label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Linkkolommen */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h3 className={styles.colTitle}>{heading}</h3>
              <ul className={styles.colLinks} role="list">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} Slingshot Sports. All rights reserved.
          </p>
          <nav className={styles.legal} aria-label="Juridische links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Settings</a>
          </nav>
        </div>

      </div>
    </footer>
  )
}
