import { Href } from './enum';
import { ExperienceItem } from './type';

const YANDEX: ExperienceItem = {
  name: 'yandex',
  date: 'yandexDate',
  location: 'almaty',
  description: 'inProgress',
};

const RS_REACT: ExperienceItem = {
  name: 'rsReact',
  date: 'rsReactDate',
  location: 'almaty',
  description: 'rsReactPos',
  certificateURL: Href.certReact,
};

const RS_JS: ExperienceItem = {
  name: 'rsJs',
  date: 'rsJsDate',
  location: 'almaty',
  description: 'rsJsPos',
  certificateURL: Href.certJs,
};

const RS_PRE: ExperienceItem = {
  name: 'rsPre',
  date: 'rsPreDate',
  location: 'almaty',
  description: 'rsPrePos',
  certificateURL: Href.certPre,
};

const ACADEMY: ExperienceItem = {
  name: 'academy',
  date: 'academyDate',
  location: 'minsk',
  description: 'academyPos',
};

const DATASTREAM: ExperienceItem = {
  name: 'datastream',
  date: 'datastreamDate',
  location: 'minsk',
  description: 'datastreamDecs',
  position: 'datastreamPos',
};

const MESTO_GDE_SVET: ExperienceItem = {
  name: 'mestoGdeSvet',
  date: 'mestoGdeSvetDate',
  location: 'minsk',
  description: 'mestoGdeSvetDecs',
  position: 'mestoGdeSvetPos',
};

const DAR_ELECTRO: ExperienceItem = {
  name: 'darElectro',
  date: 'darElectroDate',
  location: 'minsk',
  description: 'darElectroDecs',
  position: 'darElectroPos',
};

export const EDUCATION_LIST: ExperienceItem[] = [YANDEX, RS_REACT, RS_JS, RS_PRE, ACADEMY];

export const WORK_LIST: ExperienceItem[] = [DAR_ELECTRO, MESTO_GDE_SVET, DATASTREAM];

export const LANGS = ['en', 'ru'];

export const SKILLS_LIST = [
  'React',
  'Next.js 13',
  'TypeScript',
  'JavaScript',
  'Redux toolkit',
  'i18next',
  'REST Api / GraphQL',
  'Webpack / ESLint',
  'Vite',
  'Jest',
  'Git / GitHub',
  'HTML',
  'CSS / Sass',
  'Figma',
];
