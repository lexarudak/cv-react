import React, { CSSProperties, useMemo, VFC } from 'react';
import cn from 'classnames';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classes from '../layout-config-section.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';
import { SortableItemContext } from './sortable-context';
import DragHandler from '../drag-handler';

export type Item = {
  id: string;
  enabled: boolean;
  title: string;
  link: string;
};

interface Props {
  item: Item;
  onCheckboxChange?: (id: string) => void;
  className?: string;
}

const SortableItem: VFC<Props> = ({ item, onCheckboxChange, className }) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: item.id });

  const context = useMemo(
    () => ({
      attributes,
      listeners,
      ref: setActivatorNodeRef,
    }),
    [attributes, listeners, setActivatorNodeRef]
  );

  const style: CSSProperties = {
    opacity: isDragging ? 0.4 : undefined,
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const onChange = (): void => {
    onCheckboxChange?.(item.id);
  };

  return (
    <SortableItemContext.Provider value={context}>
      <li
        className={cn(classes.item, className)}
        ref={setNodeRef}
        style={style}
        data-auto="sortable-item"
      >
        <span>
          <input type="checkbox" checked={item.enabled} onChange={onChange} />
        </span>

        <span className={classes.itemTitle}>{item.title}</span>

        <span>
          <a href={item.link}>
            <FontAwesomeIcon icon={['fas', 'pen-to-square' as IconName]} />
          </a>
        </span>

        <span>
          <DragHandler className={classes.dragHandler} />
        </span>
      </li>
    </SortableItemContext.Provider>
  );
};

export default SortableItem;
