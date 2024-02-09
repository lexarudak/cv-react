import React, { useContext, VFC } from 'react';
import { SortableItemContext } from '../sortable-item/sortable-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    >
      <FontAwesomeIcon icon={['fas', 'grip-lines']} />
    </button>
  );
};

export default DragHandler;
