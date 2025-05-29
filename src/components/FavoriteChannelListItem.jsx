import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

import DragDropIcon from "@/assets/svgs/icon-drag-drop.svg?react";
import FilledStarIcon from "@/assets/svgs/icon-filled-star.svg?react";

const FavoriteChannelListItem = ({ id, name }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id });

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
    >
      <div className="h-12 w-12 flex-none rounded-lg bg-gray-200" />
      <p className="ml-3 w-3/5 flex-1 text-sm font-bold">{name}</p>
      <div className="flex flex-1 justify-end pr-2">
        <button>
          <FilledStarIcon className="mr-1 mb-0.5 ml-2" />
        </button>
        <button ref={setActivatorNodeRef} className="touch-none" {...listeners}>
          <DragDropIcon className="ml-3" />
        </button>
      </div>
    </li>
  );
};

export default FavoriteChannelListItem;
