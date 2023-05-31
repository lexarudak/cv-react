import React from 'react';
import { DOWNLOAD, NAME, NAMESPACE, POSITION } from './const';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';

export const Title = (): JSX.Element => {
  const { t } = useTranslation(NAMESPACE);

  return (
    <section className={styles.container}>
      <h1 className={styles.name}>{t(NAME)}</h1>
      <h2 className={styles.position}>{t(POSITION)}</h2>
      <button className={styles.button}>{t(DOWNLOAD)}</button>
    </section>
  );
};
