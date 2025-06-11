import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

import DragDropIcon from "@/assets/svgs/icon-drag-drop.svg?react";
import FilledStarIcon from "@/assets/svgs/icon-filled-star.svg?react";
import useChannelNavigation from "@/hooks/useChannelNavigation";
import useToggleFavorite from "@/hooks/useToggleFavorite";

const FavoriteChannelListItem = ({ channelId, channelName, thumbnail }) => {
  const {
    attributes,
    isDragging,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
  } = useSortable({ id: channelId });
  const goToChannelPlayer = useChannelNavigation();
  const toggleFavorite = useToggleFavorite();
  const [isProcessing, setIsProcessing] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleUnfavoriteClick = async (e) => {
    e.stopPropagation();
    if (isProcessing) {
      return;
    }

    setIsProcessing(true);
    await toggleFavorite(channelId);
    setIsProcessing(false);
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="my-2 flex h-16 w-full items-center rounded-md bg-gray-100 p-2"
      onClick={() => goToChannelPlayer(channelId)}
    >
      <img
        className="h-12 w-12"
        src={thumbnail}
        alt={`${channelName} 썸네일`}
      />
      <p className="ml-3 w-3/5 flex-1 truncate overflow-hidden text-sm font-bold whitespace-nowrap">
        {channelName}
      </p>
      <div className="flex flex-1 justify-end pr-2">
        <button onClick={handleUnfavoriteClick}>
          <FilledStarIcon className="mr-1 mb-0.5 ml-2" />
        </button>
        <button
          ref={setActivatorNodeRef}
          className={`touch-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          {...listeners}
          onClick={(e) => e.stopPropagation()}
        >
          <DragDropIcon className="ml-3" />
        </button>
      </div>
    </li>
  );
};

export default FavoriteChannelListItem;
