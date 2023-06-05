import React from 'react';

export const fillTechList = (stack: string[], className?: string) =>
  stack.map((value, index) => (
    <li className={className} key={index}>
      {value}
    </li>
  ));
