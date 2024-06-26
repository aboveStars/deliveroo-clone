import React from "react";
import { Image, Pressable, Text } from "react-native";

type Props = {
  imgUrl: string;
  title: string;
};

const CatogoryCard = ({ imgUrl, title }: Props) => {
  return (
    <Pressable className="relative mr-2">
      <Image
        source={{
          uri: imgUrl,
        }}
        className="h-20 w-20 rounded"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </Pressable>
  );
};

export default CatogoryCard;
