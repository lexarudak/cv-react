import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';

export const Footer = (): JSX.Element => {
  const { t } = useTranslation('title');

  return (
    <footer className={styles.footer}>
      <span className={styles.item}>{t('name')}</span>
      <a
        className={styles.item}
        href="mailto:lexarudak@gmail.com"
        itemProp="email"
        target="_blank"
        rel="noreferrer"
      >
        lexarudak2@gmail.com
      </a>
      <span className={styles.item}>2023 &copy;</span>
    </footer>
  );
};
