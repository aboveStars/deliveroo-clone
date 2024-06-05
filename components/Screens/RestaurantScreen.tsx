import { urlFor } from "@/sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";

type Props = {};

const RestaurantScreen = (props: Props) => {
  const navigiation = useNavigation();

  const route = useRoute();

  useEffect(() => {
    navigiation.setOptions({
      headerShown: false,
    });
  }, []);

  console.log(route.params);

  return (
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
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantScreen;
