import { TFunction } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANG_LIST } from './const';
import styles from './styles.module.scss';

const fillList = (t: TFunction): JSX.Element[] =>
  LANG_LIST.map(([lang, level], index) => (
    <li className={styles.item} key={index}>
      <span className={styles.lang}>{t(lang)}</span>
      <span className={styles.level}>{t(level)}</span>
    </li>
  ));

export const Lang = (): JSX.Element => {
  const { t } = useTranslation('languages');

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <ul className={styles.list}>{fillList(t)}</ul>
    </section>
  );
};
