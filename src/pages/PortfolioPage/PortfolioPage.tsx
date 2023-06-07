import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { projects } from 'projects.json';
import { Project } from 'models';
import { ProjectBlock } from 'components/ProjectBlock/ProjectBlock';

const fillPage = (projects: Project[]) =>
  projects.map((project) => <ProjectBlock project={project} key={project.id} />);

export const PortfolioPage = (): JSX.Element => {
  useEffect(() => window.scrollTo(0, 0), []);

  return <section className={styles.container}>{fillPage(projects)}</section>;
};
