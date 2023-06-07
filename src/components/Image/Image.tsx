import classNames from 'classnames';
import React, { useState } from 'react';
import { ALT, SRC } from './const';
import styles from './styles.module.scss';

export const Image = (): JSX.Element => {
  const [isImgLoad, setIsImgLoad] = useState(false);
  return (
    <img
      src={SRC}
      alt={ALT}
      className={classNames(styles.img, isImgLoad && styles.active)}
      onLoad={() => setIsImgLoad(true)}
    />
  );
};
