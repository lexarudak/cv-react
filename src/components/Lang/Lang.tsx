import React from 'react';
import { LANG_LIST, TITLE } from './const';
import styles from './styles.module.scss';

const fillList = (): JSX.Element[] =>
  LANG_LIST.map(([lang, level], index) => (
    <li className={styles.item} key={index}>
      <span className={styles.lang}>{lang}</span>
      <span className={styles.level}>{level}</span>
    </li>
  ));

export const Lang = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{TITLE}</h2>
      <ul className={styles.list}>{fillList()}</ul>
    </section>
  );
};
