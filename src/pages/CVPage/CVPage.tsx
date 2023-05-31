import { Title, Image, Education, Skills, Lang, PortfolioCV } from 'components';
import React from 'react';
import styles from './styles.module.scss';

export const CVPage = (): JSX.Element => {
  return (
    <section className={styles.cvPage}>
      <Image />
      <Title />
      <Skills />
      <Lang />
      <PortfolioCV />
      <Education />
    </section>
  );
};
