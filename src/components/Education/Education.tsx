import React from 'react';
import { EDUCATION_LIST, TITLE } from './const';
import styles from './styles.module.scss';

const fillList = (): JSX.Element[] =>
  EDUCATION_LIST.map(({ name, date, position, location, certificateURL }, index) => (
    <li className={styles.item} key={index}>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.info}>
        <span className={styles.date}>{date}</span>
        {' | '}
        <span className={styles.location}>{location}</span>
      </p>
      <p className={styles.position}>{position}</p>
      {certificateURL && (
        <a className={styles.certificate} href={certificateURL} target="_blank" rel="noreferrer">
          Certificate
        </a>
      )}
    </li>
  ));

export const Education = (): JSX.Element => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{TITLE}</h2>
      <ul className={styles.list}>{fillList()}</ul>
    </section>
  );
};
