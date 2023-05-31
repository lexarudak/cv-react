import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGS } from './const';
import styles from './styles.module.scss';

export const LangSwitcher = (): JSX.Element => {
  const { t, i18n } = useTranslation('base');
  const [EN, RU] = LANGS;

  const onClickHandler = (): void => {
    i18n.changeLanguage(i18n.resolvedLanguage === EN ? RU : EN);
  };

  return (
    <button className={styles.button} onClick={onClickHandler}>
      {t('lang')}
    </button>
  );
};
