import { RouteList } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const ProjectNav = ({ name }: { name: string }): JSX.Element => {
  const { t } = useTranslation('project');
  return (
    <nav className={styles.nav}>
      <Link to={RouteList.portfolio} className={styles.link}>
        {t('portfolio')}
      </Link>
      <span>/</span>
      <span className={styles.name}>{name}</span>
    </nav>
  );
};
