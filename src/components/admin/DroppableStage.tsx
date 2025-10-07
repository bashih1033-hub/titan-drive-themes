import { useDroppable } from '@dnd-kit/core';
import { ReactNode } from 'react';

interface DroppableStageProps {
  id: string;
  children: ReactNode;
}

export function DroppableStage({ id, children }: DroppableStageProps) {
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`min-h-[200px] transition-colors ${
        isOver ? 'bg-primary/5 ring-2 ring-primary' : ''
      }`}
    >
      {children}
    </div>
  );
}