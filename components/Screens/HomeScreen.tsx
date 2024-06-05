import Catagories from "@/components/Catagories/Catagories";
import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import FeaturedRow from "../Featured/FeaturedRow";

const HomeScreen = () => {
  const navigiation = useNavigation();

  useLayoutEffect(() => {
    navigiation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5 flex-1">
      <View className="flex-row pb-3 items-center space-x-2 px-4">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
          <View className="flex-row">
            <Text className="font-bold text-xl flex-row">Current Location</Text>
            <ChevronDownIcon size={20} color="#00CCBB" />
          </View>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      <View className="flex-row items-center px-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput
            placeholder="Restaurants and cuisinies "
            inputMode="text"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 50,
        }}
      >
        <Catagories />

        <FeaturedRow description="Featured" title="Featured" id="1" />
        <FeaturedRow
          description="Tasty Discounts"
          title="Tasty Discounts"
          id="2"
        />
        <FeaturedRow
          description="Offers Near You!"
          title="Offers Near You"
          id="3"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
