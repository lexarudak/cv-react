import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const Summary = (): JSX.Element => {
  const { t } = useTranslation('summary');

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <p className={styles.subtitle}>{t('subtitle')}</p>
      <p className={styles.body}></p>
    </section>
  );
};
