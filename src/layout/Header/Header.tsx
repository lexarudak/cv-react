import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BUTTON_LIST } from './const';
import styles from './styles.module.scss';

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();

  const fillNav = BUTTON_LIST.map(([name, path], index) => (
    <Link
      to={path}
      key={index}
      className={classNames(styles.button, pathname === path && styles.active)}
    >
      {name}
    </Link>
  ));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>{fillNav}</nav>
    </header>
  );
};
