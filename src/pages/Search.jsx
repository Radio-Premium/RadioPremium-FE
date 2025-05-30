import ChannelListItem from "@/components/ChannelListItem";
import RadioSearchInput from "@/components/header/RadioSearchInput";

const Search = () => {
  return (
    <>
      <RadioSearchInput />
      <div className="mt-8">
        <ChannelListItem />
      </div>
    </>
  );
};

export default Search;
