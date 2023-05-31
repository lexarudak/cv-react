import { RouteList } from 'models';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const PortfolioCV = (): JSX.Element => {
  return (
    <Link className={styles.container} to={RouteList.portfolio}>
      <h3>Portfolio</h3>
    </Link>
  );
};
