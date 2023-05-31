import { Title, Image } from 'components';
import { Lang } from 'components/Lang/Lang';
import { Skills } from 'components/Skills/Skills';
import React from 'react';
import styles from './styles.module.scss';

export const CVPage = (): JSX.Element => {
  return (
    <section className={styles.cvPage}>
      <Image />
      <Title />
      <Skills />
      <Lang />
    </section>
  );
};
