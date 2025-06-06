import { closestCenter, DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useEffect, useState } from "react";

import FavoriteChannelListItem from "@/components/FavoriteChannelListItem";

const FavoriteChannelList = ({ channelList }) => {
  const [favoriteChannelList, setFavoriteChannelList] = useState(channelList);

  useEffect(() => {
    setFavoriteChannelList(channelList);
  }, [channelList]);

  const handleChannelDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      const oldIndex = favoriteChannelList.findIndex(
        (channel) => channel.id === active.id
      );
      const newIndex = favoriteChannelList.findIndex(
        (channel) => channel.id === over.id
      );

      const newList = arrayMove(favoriteChannelList, oldIndex, newIndex);
      setFavoriteChannelList(newList);
    }
  };

  const restrictToYRange = (args) => {
    const { transform } = args;

    const minY = -190;
    const maxY = 190;

    return {
      ...transform,
      y: Math.min(Math.max(transform.y, minY), maxY),
    };
  };

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleChannelDragEnd}
      modifiers={[restrictToVerticalAxis, restrictToYRange]}
    >
      <SortableContext
        items={favoriteChannelList}
        strategy={verticalListSortingStrategy}
      >
        {favoriteChannelList.map(({ logoUrl, id, name }) => (
          <FavoriteChannelListItem
            key={id}
            thumbnail={logoUrl}
            channelId={id}
            channelName={name}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};

export default FavoriteChannelList;
