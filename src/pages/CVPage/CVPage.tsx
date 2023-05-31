import { Title, Image, Education, Skills, Lang } from 'components';
import React from 'react';
import styles from './styles.module.scss';

export const CVPage = (): JSX.Element => {
  return (
    <section className={styles.cvPage}>
      <Image />
      <Title />
      <Skills />
      <Lang />
      <Education />
    </section>
  );
};
