import BlankStar from "@/assets/svgs/BlankStar.svg?react";
import DragDrop from "@/assets/svgs/DragDrop.svg?react";
import FilledStar from "@/assets/svgs/FilledStar.svg?react";

const ChannelListItem = ({
  thumbnail,
  channelName,
  isFavoriteChannel,
  onToggleInterest,
}) => {
  return (
    <li className="my-2 flex h-16 w-[352px] items-center rounded-md bg-gray-100 p-2">
      <img className="h-12 w-12" src={thumbnail} />
      {isFavoriteChannel ? (
        <>
          <p className="ml-3 w-3/5 text-sm font-bold">{channelName}</p>
          <div className="flex">
            <button onClick={onToggleInterest}>
              <FilledStar className="mr-1 mb-0.5 ml-2" />
            </button>
            <button>
              <DragDrop className="ml-3" />
            </button>
          </div>
        </>
      ) : (
        <>
          <p className="ml-3 w-3/4 text-sm font-bold">{channelName}</p>
          <button onClick={onToggleInterest}>
            <BlankStar className="mx-3 ml-auto" />
          </button>
        </>
      )}
    </li>
  );
};

export default ChannelListItem;
