import LayoutConfigSection from '../layout-config-section';
import { VFC, useState } from 'react';
import React from 'react';
import { Item } from '../layout-config-section/sortable-item';

type Props = {
  name: string;
};

const a = [
  {
    id: '1',
    enabled: true,
    title: 'title 1',
    link: 'string',
  },
  {
    id: '2',
    enabled: true,
    title: 'title 2',
    link: 'string',
  },
  {
    id: '3',
    enabled: true,
    title: 'title 3',
    link: 'string',
  },
];
const LayoutConfigField: VFC<Props> = () => {
  const [value, setValue] = useState(a);

  const onChange = (e: Item[]): void => {
    setValue(e);
  };

  return <LayoutConfigSection items={value} onChange={onChange} />;
};

export default LayoutConfigField;
