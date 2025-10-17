import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

window.addEventListener('scroll', function() {
  const images = document.querySelectorAll('.heroImg img');
  const scrollPosition = window.scrollY;  // Get scroll position

  // Determine the scale based on scroll position (you can adjust the multiplier for desired effect)
  const scale = Math.max(0.5, 1 - scrollPosition / 1000);  // Scale between 1 and 0.5

  // Apply scaling to each image
  images.forEach(img => {
    img.style.transform = `scale(${scale})`;  // Apply scaling effect
  });
});


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
        <p align="center" class="heroImg">
        <img class="light-img" src="/img/nnLogoWH.png" width="420" />
        <img class="dark-img" src="/img/nnLogoBL.png"  width="420" />
        </p>
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Start here...
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome!`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
