import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        {/* Left side — logo */}
        <div className={styles.heroImage}>
          <img
            className="light-img"
            src="/img/nnFrontLogoWH.png"
            width="420"
            alt="NicNotes light logo"
          />
          <img
            className="dark-img"
            src="/img/nnFrontLogoBL.png"
            width="420"
            alt="NicNotes dark logo"
          />
        </div>

        {/* Right side — title + subtitle + button */}
        <div className={styles.heroText}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.hero_subtitle)} >{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={styles.heroButton} to="/docs/intro">
              Start here...
            </Link>
          </div>
        </div>
        
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Welcome!"
      description="NicNotes — a personal hub for programming notes and projects."
    >
      <HomepageHeader />
      <main>
          <div className={styles.aboutSection}>
    <div className={styles.aboutContent}>
      <h2>About the Creator</h2>
      <p>
        This is created by Nico Steven Castro. To know more about Docusaurus and to see my git project for this:
      </p>

      <a
        className={styles.githubLink}
        href="https://github.com/Steven101projects/Project3-NicNotes-Client-side"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit my GitHub
      </a>
    </div>
  </div>
      </main>
    </Layout>
  );
}
