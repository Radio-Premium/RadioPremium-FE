import ChannelListItem from "@/components/ChannelListItem";
import ChannelSection from "@/components/ChannelSection";
import FavoriteChannelList from "@/components/FavoriteChannelList";
import TabBar from "@/components/TabBar";
import useCategorizeChannels from "@/hooks/useCategorizeChannels";
import useChannels from "@/hooks/useChannels";
import useInterestChannels from "@/hooks/useInterestChannels";
import useUserId from "@/hooks/useUserId";

const Home = () => {
  useChannels();
  const userId = useUserId();
  useInterestChannels(userId);
  const [favoriteChannelList, otherChannelList] = useCategorizeChannels();

  return (
    <>
      <TabBar />
      <div className="px-4 pt-8">
        <ChannelSection title="Favorite Channel">
          <FavoriteChannelList channelList={favoriteChannelList} />
        </ChannelSection>
        <ChannelSection title="Channel">
          {otherChannelList.map(({ channelId, name, logoUrl }) => (
            <ChannelListItem
              key={channelId}
              channelName={name}
              thumbnail={logoUrl}
            />
          ))}
        </ChannelSection>
      </div>
    </>
  );
};

export default Home;
