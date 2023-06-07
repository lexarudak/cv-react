import React from 'react';
import { useTranslation } from 'react-i18next';
import { SKILLS_LIST } from 'models';
import styles from './styles.module.scss';

const fillList = (): JSX.Element[] =>
  SKILLS_LIST.map((skill, index) => (
    <li className={styles.skill} key={index}>
      {skill}
    </li>
  ));

export const Skills = (): JSX.Element => {
  const { t } = useTranslation('skills');

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <ul className={styles.list}>{fillList()}</ul>
    </section>
  );
};
