'use client';
import { PAGE_SCROLL_GAP } from './const';
import { useEffect, useState } from 'react';

export const useScrollState = (): boolean => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect((): (() => void) => {
    const isPageTop = (): boolean => window.pageYOffset > PAGE_SCROLL_GAP;
    const setHeaderFilling = (): void => {
      setIsScroll(isPageTop());
    };
    setHeaderFilling();
    window.addEventListener('scroll', setHeaderFilling);
    return (): void => {
      window.removeEventListener('scroll', setHeaderFilling);
    };
  }, []);
  return isScroll;
};
