import classNames from 'classnames';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BUTTON_LIST } from './const';
import styles from './styles.module.scss';

export const Header = (): JSX.Element => {
  const [activePage, setActivePage] = useState(location.pathname);

  const fillNav = BUTTON_LIST.map(([name, path], index) => (
    <Link
      to={path}
      key={index}
      className={classNames(styles.button, activePage === path && styles.active)}
      onClick={() => {
        setActivePage(path);
      }}
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
