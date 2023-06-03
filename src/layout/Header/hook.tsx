import { PAGE_SCROLL_GAP } from './const';
import { useEffect, useRef, useState } from 'react';

export const useScrollState = (): [boolean, boolean] => {
  const [isScroll, setIsScroll] = useState(false);
  const [isScrollBottom, setIsScrollBottom] = useState(false);
  const oldPos = useRef(0);

  useEffect((): (() => void) => {
    const setHeaderFilling = (): void => {
      setIsScroll(window.pageYOffset > PAGE_SCROLL_GAP);
      setIsScrollBottom(window.pageYOffset > oldPos.current);
      oldPos.current = window.pageYOffset;
    };
    setHeaderFilling();
    window.addEventListener('scroll', setHeaderFilling);
    return (): void => {
      window.removeEventListener('scroll', setHeaderFilling);
    };
  }, []);
  return [isScroll, isScrollBottom];
};
