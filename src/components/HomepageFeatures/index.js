import clsx from 'clsx';
import styles from './styles.module.css';

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.featureRow)}>
          <div className={clsx('col col--8', styles.featureItem)}>
            <div className="text--center">
              <img
                src="/img/nnLogoWH.png"
                alt="NicNotes feature"
                className={styles.featureImg}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Organized Learning</h3>
              <p>
                Keep all your coding notes, project references, and study materials
                in one place. NicNotes helps you manage your progress efficiently
                while staying visually clear and easy to navigate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
