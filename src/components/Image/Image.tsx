import React from 'react';
import { ALT, SRC } from './const';
import styles from './styles.module.scss';

export const Image = (): JSX.Element => {
  return <img src={SRC} alt={ALT} className={styles.img} />;
};
