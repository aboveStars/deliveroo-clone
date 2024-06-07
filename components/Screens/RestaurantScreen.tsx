import { urlFor } from "@/sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import {
  ArrowLeftCircleIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import Dishrow from "../Catagories/Dishrow";
import BasketIcon from "../Basket/BasketIcon";
import { useDispatch } from "react-redux";
import { setRestaurant } from "@/reducers/resturantSlice";

type Props = {};

const RestaurantScreen = (props: Props) => {
  const navigiation = useNavigation();

  const route = useRoute();

  const dispatch = useDispatch();

  useEffect(() => {
    navigiation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    dispatch(
      setRestaurant({
        id: route.params?.params.id,
        imgUrl: route.params?.params.imgUrl,
        title: route.params?.params.title,
        rating: route.params?.params.rating,
        genre: route.params?.params.genre,
        address: route.params?.params.address,
        short_description: route.params?.params.short_description,
        dishes: route.params?.params.dishes,
        long: route.params?.params.long,
        lat: route.params?.params.lat,
      })
    );
  }, []);

  return (
    <>
      <BasketIcon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              // @ts-ignore
              uri: urlFor(route.params?.params.imageUrl).url(),
            }}
            className="w-full h-56 bg-gray-300 p-4"
          />
          <Pressable
            onPress={() => {
              navigiation.goBack();
            }}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <ArrowLeftCircleIcon size={20} color={"#00CCBB"} />
          </Pressable>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">
              {route.params?.params.title}
            </Text>

            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <StarIcon color="green" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  {route.params?.params.rating}
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon color="gray" opacity={0.5} size={22} />
                <Text className="text-xs text-gray-500">
                  {route.params?.params.address}
                </Text>
              </View>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">
              {route.params?.params.short_description}
            </Text>

            <Pressable className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
              <Text className="pl-2 flex-1 text-md font-bold">
                Have a food alergy?
              </Text>
              <ChevronRightIcon color="#00CCBB" />
            </Pressable>
          </View>

          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
            {route.params?.params.dishes.map((dish) => (
              <Dishrow
                key={dish._id}
                description={dish.short_description}
                id={dish._id}
                image={dish.image}
                name={dish.name}
                price={dish.price}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;
