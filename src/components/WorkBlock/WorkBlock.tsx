import { Project } from 'models';
import React from 'react';
import styles from './styles.module.scss';

const fillList = (stack: string[]) =>
  stack.map((value, index) => (
    <li className={styles.item} key={index}>
      {value}
    </li>
  ));

export const WorkBlock = ({ project }: { project: Project }): JSX.Element => {
  const { id, title, techStack } = project;
  return (
    <div
      className={styles.container}
      onClick={() => {
        console.log(id);
      }}
    >
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.list}>{fillList(techStack)}</ul>
    </div>
  );
};
