import React from 'react';
import styles from './styles.module.scss';
import { useTranslation } from 'react-i18next';
import { LANGS } from 'components/LangSwitcher/const';
import { Href } from 'models';

export const Title = (): JSX.Element => {
  const { t, i18n } = useTranslation('title');
  const [EN, RU] = LANGS;

  return (
    <section className={styles.container}>
      <h1 className={styles.name}>{t('name')}</h1>
      <h2 className={styles.position}>{t('position')}</h2>
      <a
        className={styles.button}
        download={t('name')}
        href={i18n.resolvedLanguage === EN ? Href.enCV : Href.enCV}
      >
        {t('download')}
      </a>
    </section>
  );
};
