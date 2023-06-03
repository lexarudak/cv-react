import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header } from 'layout';
import styles from './styles.module.scss';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <main
        className={styles.main}
        onScroll={(e) => {
          console.log(e);
          console.log('ss');
        }}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
