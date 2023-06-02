import { TFunction } from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './styles.module.scss';
import { ExperienceItem, ExperienceType } from 'models';
import classNames from 'classnames';

const fillList = (t: TFunction, list: ExperienceItem[]): JSX.Element[] =>
  list.map(({ name, date, location, description, position, certificateURL }, index) => (
    <li className={styles.item} key={index}>
      <h3 className={styles.name}>{t(name)}</h3>
      <p className={styles.info}>
        <span className={styles.date}>{t(date)}</span>
        {' | '}
        <span className={styles.location}>{t(location)}</span>
      </p>
      <p className={styles.description}>{t(description)}</p>
      {position && <p className={styles.position}>{t(position)}</p>}
      {certificateURL && (
        <a className={styles.certificate} href={certificateURL} target="_blank" rel="noreferrer">
          {t('certificate')}
        </a>
      )}
    </li>
  ));

export const Experience = ({
  list,
  type,
  background,
}: {
  list: ExperienceItem[];
  type: ExperienceType;
  background?: boolean;
}): JSX.Element => {
  const { t } = useTranslation(type);

  return (
    <section className={classNames(styles.container, styles[type], background && styles.bg)}>
      <h2 className={styles.title}>{t('title')}</h2>
      <ul className={styles.list}>{fillList(t, list)}</ul>
    </section>
  );
};
