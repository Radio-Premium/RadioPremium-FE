import ChannelListItem from "@/components/ChannelListItem";
import FavoriteChannelList from "@/components/FavoriteChannelList";
import TabBar from "@/components/TabBar";
import useCategorizeChannels from "@/hooks/useCategorizeChannel";

const Home = () => {
  const [channelList, favoriteChannelList] = useCategorizeChannels();

  return (
    <>
      <div className="h-12 w-full" />
      <TabBar />
      <div className="px-4 pt-8">
        <section>
          <h2 className="text-[16px] font-semibold">Favorite Channel</h2>
          <ul className="scrollbar-hide flex h-60 w-full flex-col items-center overflow-scroll">
            <FavoriteChannelList channelList={favoriteChannelList} />
          </ul>
        </section>
        <section>
          <h2 className="text-[16px] font-semibold">Channel</h2>
          <ul className="scrollbar-hide flex h-60 w-full flex-col items-center overflow-scroll">
            {channelList.map(({ channelId, name, logoUrl }) => (
              <ChannelListItem
                key={channelId}
                channelName={name}
                thumbnail={logoUrl}
              />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Home;
