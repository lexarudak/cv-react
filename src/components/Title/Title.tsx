import React from 'react';
import { NAME, POSITION } from './const';
import styles from './styles.module.scss';

export const Title = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <h1 className={styles.name}>{NAME}</h1>
      <h2 className={styles.position}>{POSITION}</h2>
      <button className={styles.button}>Download CV</button>
    </section>
  );
};
