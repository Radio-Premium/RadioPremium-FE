import BlankStarIcon from "@/assets/svgs/icon-blank-star.svg?react";
import DragDropIcon from "@/assets/svgs/icon-drag-drop.svg?react";
import FilledStarIcon from "@/assets/svgs/icon-filled-star.svg?react";

const ChannelListItem = ({
  thumbnail,
  channelName,
  isFavoriteChannel,
  onToggleFavorite,
}) => {
  return (
    <li className="my-2 flex h-16 w-full items-center rounded-md bg-gray-100 p-2">
      <img
        className="h-12 w-12"
        src={thumbnail}
        alt={`${channelName} 썸네일`}
      />
      {isFavoriteChannel ? (
        <>
          <p className="ml-3 w-3/5 flex-1 text-sm font-bold">{channelName}</p>
          <div className="flex flex-1 justify-center pr-2">
            <button onClick={onToggleFavorite}>
              <FilledStarIcon className="mr-1 mb-0.5 ml-2" />
            </button>
            <button>
              <DragDropIcon className="ml-3" />
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="ml-3 w-3/4 text-sm font-bold">{channelName}</p>
          <button onClick={onToggleFavorite}>
            <BlankStarIcon className="mx-3 ml-auto" />
          </button>
        </>
      )}
    </li>
  );
};

export default ChannelListItem;
