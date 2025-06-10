import ChannelListItem from "@/components/ChannelListItem";
import ChannelSection from "@/components/ChannelSection";
import FavoriteChannelList from "@/components/FavoriteChannelList";
import TabBar from "@/components/TabBar";
import useCategorizeChannels from "@/hooks/useCategorizeChannels";
import useChannels from "@/hooks/useChannels";
import useUserData from "@/hooks/useUserData";

const Home = () => {
  useChannels();
  useUserData();
  const [favoriteChannelList, otherChannelList] = useCategorizeChannels();

  return (
    <>
      <TabBar />
      <div className="px-4 pt-8">
        <ChannelSection title="Favorite Channel" height="h-60">
          <FavoriteChannelList channelList={favoriteChannelList} />
        </ChannelSection>
        <ChannelSection title="Channel" marginTop="mt-6" height="h-80">
          {otherChannelList.map(({ id, name, logoUrl }) => (
            <ChannelListItem
              key={id}
              channelId={id}
              channelName={name}
              thumbnail={logoUrl}
              backgroundColor="bg-gray-100"
            />
          ))}
        </ChannelSection>
      </div>
    </>
  );
};

export default Home;
