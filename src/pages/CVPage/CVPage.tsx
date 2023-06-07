import { Experience, Image, Lang, PortfolioCV, Skills, Summary, Title, Contacts } from 'components';
import { EDUCATION_LIST, ExperienceType, WORK_LIST } from 'models';
import React, { useEffect } from 'react';
import styles from './styles.module.scss';

export const CVPage = (): JSX.Element => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section className={styles.container}>
      <Image />
      <Title />
      <Skills />
      <Lang />
      <PortfolioCV />
      <Experience list={EDUCATION_LIST} type={ExperienceType.education} background />
      <Summary />
      <Experience list={WORK_LIST} type={ExperienceType.work} />
      <Contacts />
    </section>
  );
};
