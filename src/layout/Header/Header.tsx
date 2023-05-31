import classNames from 'classnames';
import { LangSwitcher } from 'components/LangSwitcher/LangSwitcher';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { BUTTON_LIST } from './const';
import styles from './styles.module.scss';

export const Header = (): JSX.Element => {
  const { t } = useTranslation('layout');
  const { pathname } = useLocation();

  const fillNav = BUTTON_LIST.map(([name, path], index) => (
    <Link
      to={path}
      key={index}
      className={classNames(styles.button, pathname === path && styles.active)}
    >
      {t(name)}
    </Link>
  ));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>{fillNav}</nav>
      <LangSwitcher />
    </header>
  );
};
