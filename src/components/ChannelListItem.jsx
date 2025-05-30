import BlankStarIcon from "@/assets/svgs/icon-blank-star.svg?react";

const ChannelListItem = ({ thumbnail, channelName, onToggleFavorite }) => {
  return (
    <li className="my-2 flex h-16 w-full items-center rounded-md bg-gray-100 p-2">
      <img
        className="h-12 w-12"
        src={thumbnail}
        alt={`${channelName} 썸네일`}
      />
      <p className="ml-3 w-3/4 text-sm font-bold">{channelName}</p>
      <button onClick={onToggleFavorite}>
        <BlankStarIcon className="mx-3 ml-auto" />
      </button>
    </li>
  );
};

export default ChannelListItem;
