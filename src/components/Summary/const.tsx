import { Href, RouteList } from 'models';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export const LANG_COMPONENTS = {
  github: <a href={Href.github} target="_blank" rel="noreferrer" className={styles.link} />,
  codewars: <a href={Href.codewars} target="_blank" rel="noreferrer" className={styles.link} />,
  portfolio: <Link to={RouteList.portfolio} className={styles.link} />,
  active: <span className={styles.activeText}></span>,
  ul: <ul className={styles.list} />,
  li: <li className={styles.item} />,
};

export const FACTS_LIST = ['facts.1', 'facts.2'];
