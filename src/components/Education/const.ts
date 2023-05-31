import { EducationItem } from './type';

export const TITLE = 'education';

const YANDEX: EducationItem = {
  name: 'Yandex ШРИ',
  date: 'June 2023 - Present',
  location: 'Almaty, Kazakhstan',
  position: 'in progress',
};

const RS_REACT: EducationItem = {
  name: 'RS School | React',
  date: 'March 2023 - June 2023',
  location: 'Almaty, Kazakhstan',
  position: 'Position: 1',
  certificateURL: 'https://app.rs.school/certificate/aubp6e79',
};

const RS_JS: EducationItem = {
  name: 'RS School | JavaScript/Front-end',
  date: 'September 2022 - March 2023',
  location: 'Almaty, Kazakhstan',
  position: 'Position: 35',
  certificateURL: 'https://app.rs.school/certificate/aubp6e79',
};

const ACADEMY: EducationItem = {
  name: 'Belarusian State Academy of Communications',
  date: 'September 2007 - June 2014',
  location: 'Minsk, Belarus',
  position: 'Telecommunications engineer',
};

export const EDUCATION_LIST: EducationItem[] = [YANDEX, RS_REACT, RS_JS, ACADEMY];
