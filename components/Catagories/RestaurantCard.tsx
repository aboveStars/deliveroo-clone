import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";

type Props = {
  id: string;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  shortDescription: string;
  dishes: string[];
  long: number;
  lat: number;
};

const RestaurantCard = ({
  address,
  dishes,
  genre,
  id,
  imageUrl,
  lat,
  long,
  rating,
  shortDescription,
  title,
}: Props) => {
  return (
    <Pressable className="mr-3 bg-white">
      <Image
        source={{
          uri: imageUrl,
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
      </View>
      <View className="flex-row items-center space-x-1 px-3">
        <StarIcon color="green" opacity={0.5} size={22} />
        <Text className="text-xs text-gray-500">
          <Text className="text-green-500">{rating}</Text> {genre}
        </Text>
      </View>

      <View className="flex-row items-center space-x-1 px-3">
        <MapPinIcon color="gray" opacity={0.4} size={22} />
        <Text className="text-sm text-gray-500">Nearby {address}</Text>
      </View>
    </Pressable>
  );
};

export default RestaurantCard;