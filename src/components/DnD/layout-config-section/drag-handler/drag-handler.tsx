import React, { useContext, VFC } from 'react';
import { SortableItemContext } from '../sortable-item/sortable-context';

type Props = {
  className?: string;
};

const DragHandler: VFC<Props> = ({ className }) => {
  const { attributes, listeners, ref } = useContext(SortableItemContext);

  return (
    <div
      data-auto="drag-handler"
      className={className}
      {...attributes}
      {...listeners}
      ref={ref}
    ></div>
  );
};

export default DragHandler;
