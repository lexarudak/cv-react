import { Href, RouteList } from 'models';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const LANG_COMPONENTS = {
  github: <a href={Href.github} target="_blank" rel="noreferrer" className={styles.link} />,
  codewars: <a href={Href.codewars} target="_blank" rel="noreferrer" className={styles.link} />,
  portfolio: <Link to={RouteList.portfolio} className={styles.link} />,
  routine: <a href={Href.routine} target="_blank" rel="noreferrer" className={styles.link} />,
  active: <span className={styles.activeText}></span>,
  dark: <span className={styles.dark}></span>,
  ul: <ul className={styles.list} />,
  li: <li className={styles.item} />,
};
