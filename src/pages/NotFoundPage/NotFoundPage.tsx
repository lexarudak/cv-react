import { RouteList } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const NotFoundPage = (): JSX.Element => {
  const { t } = useTranslation('notFound');

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <h2 className={styles.subtitle}>{t('subtitle')}</h2>
      <p className={styles.text}>
        {t('text')}
        <Link to={RouteList.cv} className={styles.button}>
          CV
        </Link>
        &nbsp;?
      </p>
    </section>
  );
};
