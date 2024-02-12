import { VFC } from 'react';
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import SortableItem, { Item } from './sortable-item';
import classes from './layout-config-section.module.scss';
import SortableOverlay from './sortable-overlay';
import useDndConfig from './hooks/use-dnd-config';
import React from 'react';

type Props = {
  items: Item[];
  onChange: (items: Item[]) => void;
};

const LayoutConfigSection: VFC<Props> = ({ items, onChange }) => {
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { onDragStart, onDragCancel, onDragEnd, handleCheckboxChange, activeItem } = useDndConfig(
    items,
    onChange
  );

  if (!items.length) {
    return null;
  }

  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragCancel={onDragCancel}
    >
      <SortableContext items={items}>
        <ul className={classes.section} role="application" data-auto="landing-page-section">
          <li className={classes.item}>
            <span>Show</span>
            <span className={classes.itemTitle}>Item</span>
            <span>Actions</span>
            <span>Order</span>
          </li>

          {items.map((item) => (
            <SortableItem key={item.id} item={item} onCheckboxChange={handleCheckboxChange} />
          ))}
        </ul>
      </SortableContext>
      <SortableOverlay>
        {activeItem && <SortableItem item={activeItem} className={classes.overlay} />}
      </SortableOverlay>
    </DndContext>
  );
};

export default LayoutConfigSection;
