import classNames from 'classnames';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BUTTONS_LIST, CONTACTS_LIST } from './const';
import styles from './styles.module.scss';

const fillList = (list: string[][]): JSX.Element[] =>
  list.map(([href, itemProp, name, alt, src], index) => (
    <a
      href={href}
      className={styles.item}
      itemProp={itemProp}
      target="_blank"
      rel="noreferrer"
      key={index}
    >
      {name ? name : <img src={src} alt={alt} className={classNames(styles.img)} />}
    </a>
  ));

export const Contacts = (): JSX.Element => {
  const { t } = useTranslation('contacts');

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('contacts')}</h2>
      <p className={styles.location}>{t('almaty')}</p>
      <ul className={styles.list}>{fillList(CONTACTS_LIST)}</ul>
      <ul className={styles.buttons}>{fillList(BUTTONS_LIST)}</ul>
    </section>
  );
};
