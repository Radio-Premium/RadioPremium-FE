import ChannelListItem from "@/components/ChannelListItem";
import ChannelSection from "@/components/ChannelSection";
import FavoriteChannelList from "@/components/FavoriteChannelList";
import TabBar from "@/components/TabBar";
import useCategorizeChannels from "@/hooks/useCategorizeChannel";
import useChannels from "@/hooks/useChannels";

const Home = () => {
  useChannels();
  const [channelList, favoriteChannelList] = useCategorizeChannels();

  return (
    <>
      <TabBar />
      <div className="px-4 pt-8">
        <ChannelSection title="Favorite Channel">
          <FavoriteChannelList channelList={favoriteChannelList} />
        </ChannelSection>
        <ChannelSection title="Channel">
          {channelList.map(({ channelId, name, logoUrl }) => (
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
