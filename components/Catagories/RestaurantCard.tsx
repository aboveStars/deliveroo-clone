import { urlFor } from "@/sanity";
import { useNavigation } from "@react-navigation/native";

import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import HomeScreen from "../Screens/HomeScreen";

type Props = {
  id: string;
  imageUrl: string;
  title: string;
  rating: number;
  genre: string;
  address: string;
  short_description: string;
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
  short_description,
  title,
}: Props) => {
  const navigation = useNavigation();

  const handleClick = () => {
    // @ts-ignore
    navigation.navigate("Restaurant", {
      screen: HomeScreen,
      params: {
        id,
        imageUrl: imageUrl,
        title: title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      },
    });
  };

  return (
    <Pressable className="mr-3 bg-white" onPress={handleClick}>
      <Image
        source={{
          uri: urlFor(imageUrl).url(),
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
