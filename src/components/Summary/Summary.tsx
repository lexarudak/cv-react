import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { LANG_COMPONENTS } from 'i18n/';
import styles from './styles.module.scss';

export const Summary = (): JSX.Element => {
  const { t } = useTranslation('summary');

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <p className={styles.subtitle}>{t('subtitle')}</p>
      <Trans t={t} i18nKey={'body'} components={LANG_COMPONENTS} />
      <Trans t={t} i18nKey={'facts'} components={LANG_COMPONENTS} />
    </section>
  );
};
