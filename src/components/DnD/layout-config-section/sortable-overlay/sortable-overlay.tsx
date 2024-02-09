import { defaultDropAnimationSideEffects, DragOverlay, DropAnimation } from '@dnd-kit/core';
import React from 'react';

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: '0.4',
      },
    },
  }),
};

const SortableOverlay: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <DragOverlay dropAnimation={dropAnimationConfig}>{children}</DragOverlay>
);

export default SortableOverlay;
