import { RouteList } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const PortfolioCV = (): JSX.Element => {
  const { t } = useTranslation('layout');

  return (
    <Link className={styles.container} to={RouteList.portfolio}>
      <h3>{t('portfolio')}</h3>
    </Link>
  );
};
