import { TFunction } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { EDUCATION_LIST } from './const';
import styles from './styles.module.scss';

const fillList = (t: TFunction<'education', undefined, 'education'>): JSX.Element[] =>
  EDUCATION_LIST.map(({ name, date, position, location, certificateURL }, index) => (
    <li className={styles.item} key={index}>
      <h3 className={styles.name}>{t(name)}</h3>
      <p className={styles.info}>
        <span className={styles.date}>{t(date)}</span>
        {' | '}
        <span className={styles.location}>{t(location)}</span>
      </p>
      <p className={styles.position}>{t(position)}</p>
      {certificateURL && (
        <a className={styles.certificate} href={certificateURL} target="_blank" rel="noreferrer">
          Certificate
        </a>
      )}
    </li>
  ));

export const Education = (): JSX.Element => {
  const { t } = useTranslation('education');

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <ul className={styles.list}>{fillList(t)}</ul>
    </section>
  );
};
