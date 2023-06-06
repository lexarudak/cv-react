import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from 'projects.json';
import styles from './styles.module.scss';
import { NotFoundPage } from 'pages';
import { Trans, useTranslation } from 'react-i18next';
import { ProjectNav } from './ProjectNav';
import { fillTechList } from 'models';
import { TFunction } from 'i18next';
import { LANG_COMPONENTS } from 'i18n/langComponents';
import classNames from 'classnames';

const fillLinkList = (list: string[][], t: TFunction) =>
  list.map(([url, tKey], index) => (
    <li className={styles.item} key={index}>
      <a href={url} className={styles.link} target="_blank" rel="noreferrer">
        {t(tKey)}
      </a>
    </li>
  ));

export const ProjectPage = (): JSX.Element => {
  const [isComponentMount, setIsComponentMount] = useState(false);
  const { title: paramsTitle } = useParams();
  const { t } = useTranslation('project');
  const project = projects.find(({ title }) => title === paramsTitle);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    setIsComponentMount(true);
  }, [setIsComponentMount]);

  if (!project) return <NotFoundPage />;

  const { title, techStack, photo, id, repo, deploy, task } = project;
  const LINK_LIST = [
    [repo, 'repo'],
    [deploy, 'deploy'],
    [task, 'task'],
  ];

  return (
    <>
      <section className={styles.container}>
        <ProjectNav name={title} />
        <h1 className={styles.title}>{title}</h1>
        <a
          href={deploy}
          target="_blank"
          className={classNames(styles.photo, isComponentMount && styles.active)}
          style={{ backgroundImage: photo }}
          rel="noreferrer"
        >
          <div className={styles.photoCover} />
        </a>
        <ul className={styles.list}>{fillTechList(techStack, styles.tech)}</ul>
        <p className={styles.disc}>
          <Trans t={t} i18nKey={`description.${id}`} components={LANG_COMPONENTS} />
        </p>
        <ul className={styles.linkList}>{fillLinkList(LINK_LIST, t)}</ul>
      </section>
    </>
  );
};
