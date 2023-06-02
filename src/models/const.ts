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
  certificateURL: 'https://app.rs.school/certificate/aubp6e79',
};

const RS_JS: ExperienceItem = {
  name: 'rsJs',
  date: 'rsJsDate',
  location: 'almaty',
  description: 'rsJsPos',
  certificateURL: 'https://app.rs.school/certificate/aubp6e79',
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

export const EDUCATION_LIST: ExperienceItem[] = [YANDEX, RS_REACT, RS_JS, ACADEMY];

export const WORK_LIST: ExperienceItem[] = [DAR_ELECTRO, MESTO_GDE_SVET, DATASTREAM];
