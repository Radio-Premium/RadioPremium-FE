import { useEffect, useState } from "react";

const useCategorizeChannels = () => {
  const [channels, setChannels] = useState([]);
  const [favoriteChannels, setFavoriteChannels] = useState([]);

  useEffect(() => {
    setChannels([]);
    setFavoriteChannels([]);
  }, []);

  return [channels, favoriteChannels];
};

export default useCategorizeChannels;
