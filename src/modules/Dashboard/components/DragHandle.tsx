import { GripVertical } from "lucide-react";
import type { DraggableProvided } from "@hello-pangea/dnd";

export interface DragHandleProps {
  provided: DraggableProvided;
}

export default function DragHandle({ provided }: DragHandleProps) {
  return (
    <div
      {...provided.dragHandleProps}
      className="drag-handle absolute top-2 right-2 sm:top-3 sm:right-3 z-10 flex min-h-[44px] min-w-[44px] sm:min-h-[28px] sm:min-w-[28px] cursor-grab active:cursor-grabbing items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 shadow-sm transition-colors hover:bg-slate-50 hover:text-slate-700 touch-manipulation"
      title="Drag to reorder"
    >
      <GripVertical className="h-4 w-4" />
    </div>
  );
}
