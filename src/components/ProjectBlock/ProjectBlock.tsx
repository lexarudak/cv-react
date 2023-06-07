import { Project, fillTechList } from 'models';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';

export const ProjectBlock = ({ project }: { project: Project }): JSX.Element => {
  const { title, techStack } = project;
  const navigate = useNavigate();

  return (
    <section className={styles.container} onClick={() => navigate(title)}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>{fillTechList(techStack)}</ul>
    </section>
  );
};
