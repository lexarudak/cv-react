import { PDFPath, LANGS } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const Title = (): JSX.Element => {
  const { t, i18n } = useTranslation('title');
  const [EN] = LANGS;

  return (
    <section className={styles.container}>
      <h1 className={styles.name}>{t('name')}</h1>
      <h2 className={styles.position}>{t('position')}</h2>
      <a
        className={styles.button}
        download
        href={i18n.resolvedLanguage === EN ? PDFPath.enCV : PDFPath.ruCV}
      >
        {t('download')}
      </a>
    </section>
  );
};
