import type { DraggableSyntheticListeners } from '@dnd-kit/core';
import { createContext } from 'react';

interface Context {
  attributes: Record<string, unknown>;
  listeners: DraggableSyntheticListeners;

  ref(node: HTMLElement | null): void;
}

export const SortableItemContext = createContext<Context>({
  attributes: {},
  listeners: undefined,
  ref: () => undefined,
});
