import { Active, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { Item } from '../sortable-item/sortable-item';
import { useMemo, useState } from 'react';

interface UseDndConfigInterface {
  (sections: Item[], onChange: (items: Item[]) => void): {
    onDragStart: (e: DragStartEvent) => void;
    onDragCancel: () => void;
    onDragEnd: (e: DragEndEvent) => void;
    handleCheckboxChange: (id: string) => void;
    activeItem: Item | undefined;
  };
}

const useDndConfig: UseDndConfigInterface = (items, onChange) => {
  const [active, setActive] = useState<Active | null>(null);

  const activeItem = useMemo(() => items.find((item) => item.id === active?.id), [active, items]);

  const onDragStart = ({ active }: DragStartEvent): void => {
    setActive(active);
  };

  const onDragCancel = (): void => {
    setActive(null);
  };

  const onDragEnd = ({ active, over }: DragEndEvent): void => {
    if (over && active.id !== over?.id) {
      const activeIndex = items.findIndex(({ id }) => id === active.id);
      const overIndex = items.findIndex(({ id }) => id === over.id);

      onChange(arrayMove(items, activeIndex, overIndex));
    }
    setActive(null);
  };

  const handleCheckboxChange = (id: string): void => {
    const newList = items.reduce<Item[]>((acc, item) => {
      if (item.id === id) {
        return [...acc, { ...item, enabled: !item.enabled }];
      }

      return [...acc, item];
    }, []);

    onChange(newList);
  };

  return {
    onDragStart,
    onDragCancel,
    onDragEnd,
    handleCheckboxChange,
    activeItem,
  };
};

export default useDndConfig;
