import { EducationItem } from './type';

const YANDEX: EducationItem = {
  name: 'yandex',
  date: 'yandexDate',
  location: 'almaty',
  position: 'inProgress',
};

const RS_REACT: EducationItem = {
  name: 'rsReact',
  date: 'rsReactDate',
  location: 'almaty',
  position: 'rsReactPos',
  certificateURL: 'https://app.rs.school/certificate/aubp6e79',
};

const RS_JS: EducationItem = {
  name: 'rsJs',
  date: 'rsJsDate',
  location: 'almaty',
  position: 'rsJsPos',
  certificateURL: 'https://app.rs.school/certificate/aubp6e79',
};

const ACADEMY: EducationItem = {
  name: 'academy',
  date: 'academyDate',
  location: 'minks',
  position: 'academyPos',
};

export const EDUCATION_LIST: EducationItem[] = [YANDEX, RS_REACT, RS_JS, ACADEMY];
