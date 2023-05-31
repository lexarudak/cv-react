import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const Title = (): JSX.Element => {
  const { t } = useTranslation('title');

  return (
    <section className={styles.container}>
      <h1 className={styles.name}>{t('name')}</h1>
      <h2 className={styles.position}>{t('position')}</h2>
      <button className={styles.button}>{t('download')}</button>
    </section>
  );
};
