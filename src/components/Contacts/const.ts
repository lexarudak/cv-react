import { ContactsList, Href, IconsPath } from 'models';

export const CONTACTS_LIST = [
  [Href.mail, 'email', ContactsList.mail],
  [Href.whatsApp, 'telephone', ContactsList.phone],
];

export const BUTTONS_LIST = [
  [Href.telegram, 'url', '', 'telegram', IconsPath.telegram],
  [Href.github, 'url', '', 'github', IconsPath.github],
];
