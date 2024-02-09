import React, { useContext, VFC } from 'react';
import { SortableItemContext } from '../sortable-item/sortable-context';

type Props = {
  className?: string;
};

const DragHandler: VFC<Props> = ({ className }) => {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <button
      data-auto="drag-handler"
      type="button"
      className={className}
      {...attributes}
      {...listeners}
      ref={ref}
    ></button>
  );
};

export default DragHandler;
