import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import styles from './styles.module.scss';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className={styles.maim}>
        <Outlet />
      </main>
    </>
  );
};
