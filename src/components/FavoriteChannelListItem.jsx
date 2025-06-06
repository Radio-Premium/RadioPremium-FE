import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import DragDropIcon from "@/assets/svgs/icon-drag-drop.svg?react";
import FilledStarIcon from "@/assets/svgs/icon-filled-star.svg?react";
import useChannelNavigation from "@/hooks/useChannelNavigation";

const FavoriteChannelListItem = ({ id, name }) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });
  const navigateToChannelPlayer = useChannelNavigation();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="my-2 flex h-16 w-full items-center rounded-md bg-gray-100 p-2 select-none"
      onClick={() => navigateToChannelPlayer(id)}
    >
      <div className="h-12 w-12 flex-none rounded-lg bg-gray-200" />
      <p className="ml-3 w-3/5 flex-1 truncate overflow-hidden text-sm font-bold whitespace-nowrap">
        {name}
      </p>
      <div className="flex flex-1 justify-end pr-2">
        <button>
          <FilledStarIcon className="mr-1 mb-0.5 ml-2" />
        </button>
        <button
          ref={setActivatorNodeRef}
          className={`touch-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          {...listeners}
        >
          <DragDropIcon className="ml-3" />
        </button>
      </div>
    </li>
  );
};

export default FavoriteChannelListItem;
