import { Experience, Image, Lang, PortfolioCV, Skills, Summary, Title } from 'components';
import { Contacts } from 'components/Contacts/Contacts';
import { EDUCATION_LIST, ExperienceType, WORK_LIST } from 'models';
import React, { Suspense, useEffect } from 'react';
import styles from './styles.module.scss';

export const CVPage = (): JSX.Element => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <section className={styles.cvPage}>
      <Suspense fallback={'ddd'}>
        <Image />
      </Suspense>
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
