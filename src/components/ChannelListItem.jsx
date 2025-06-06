import BlankStarIcon from "@/assets/svgs/icon-blank-star.svg?react";
import useChannelNavigation from "@/hooks/useChannelNavigation";

const ChannelListItem = ({
  thumbnail,
  channelId,
  channelName,
  backgroundColor,
}) => {
  const goToChannelPlayer = useChannelNavigation();

  return (
    <li
      className={`my-2 flex h-16 w-full items-center rounded-md ${backgroundColor} p-2 select-none`}
      onClick={() => goToChannelPlayer(channelId)}
    >
      <img
        className="h-12 w-12"
        src={thumbnail}
        alt={`${channelName} 썸네일`}
      />
      <p className="ml-3 w-3/4 text-sm font-bold">{channelName}</p>
      <button onClick={(e) => e.stopPropagation()}>
        <BlankStarIcon className="ml-3" />
      </button>
    </li>
  );
};

export default ChannelListItem;
