import { useEffect, useState } from "react";

import SearchResultListItem from "@/components/SearchResultListItem";
import { useChannelStore } from "@/store/useChannelStore";
import { useSearchStore } from "@/store/useSearchStore";

const Search = () => {
  const radioChannelList = useChannelStore((state) => state.radioChannelList);
  const interestChannelIds = useChannelStore(
    (state) => state.interestChannelIds
  );
  const keyword = useSearchStore((state) => state.keyword);
  const [filteredList, setFilteredList] = useState([]);
  const trimmedKeyword = keyword.trim();

  useEffect(() => {
    const upperKeyword = trimmedKeyword.toUpperCase();

    if (!upperKeyword) {
      setFilteredList([]);
      return;
    }

    const result = radioChannelList.filter(({ name }) =>
      name.toUpperCase().includes(upperKeyword)
    );

    setFilteredList(result);
  }, [trimmedKeyword, radioChannelList]);

  const isEmptyInput = trimmedKeyword === "";
  const isEmptyResult = trimmedKeyword && filteredList.length === 0;

  return (
    <div className="w-full px-4">
      <ul className="mt-6">
        {filteredList.map(({ id, name, logoUrl }) => (
          <SearchResultListItem
            key={id}
            channelId={id}
            channelName={name}
            thumbnail={logoUrl}
            backgroundColor="bg-white"
            isFavorite={interestChannelIds.includes(id)}
          />
        ))}
      </ul>

      {isEmptyInput && (
        <p className="mt-10 text-center text-sm text-gray-400">
          원하는 키워드(예시: SBS, 라디오, FM)를 입력해주세요.
        </p>
      )}

      {isEmptyResult && (
        <p className="mt-10 text-center text-sm text-gray-400">
          검색 결과가 없습니다.
        </p>
      )}
    </div>
  );
};

export default Search;
