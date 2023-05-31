import React from 'react';
import { TITLE, SUBTITLE } from './const';
import styles from './styles.module.scss';

export const Summary = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{TITLE}</h2>
      <p className={styles.subtitle}>{SUBTITLE}</p>
      <p className={styles.body}></p>
    </section>
  );
};
