import { RouteList } from 'models';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';

export const Layout = (): JSX.Element => {
  return (
    <>
      <div>
        <span>header</span>
        <Link className={styles.link} to={RouteList.home}>
          Home
        </Link>
        <Link className={styles.link} to={RouteList.about}>
          About
        </Link>
      </div>
      <main className={styles.maim}>
        <Outlet />
      </main>
      <p>Footer</p>
    </>
  );
};
