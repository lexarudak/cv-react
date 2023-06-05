import React from 'react';
import styles from './styles.module.scss';
import { projects } from 'projects.json';
import { Project } from 'models';
import { WorkBlock } from 'components/WorkBlock/WorkBlock';
import { Outlet } from 'react-router-dom';

const fillPage = (projects: Project[]) =>
  projects.map((project) => <WorkBlock project={project} key={project.id} />);

export const PortfolioPage = (): JSX.Element => {
  return (
    <section className={styles.container}>
      {fillPage(projects)}
      <Outlet />
    </section>
  );
};
