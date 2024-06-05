import Catagories from "@/components/Catagories/Catagories";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
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
import { client } from "@/sanity";

const HomeScreen = () => {
  const navigiation = useNavigation();

  const [featuredCatagories, setFeatureCatagories] = useState<
    { description: string; id: string; title: string }[]
  >([]);

  useEffect(() => {
    navigiation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured"] {
      ...,
      dishes[] ->
    }`
      )
      .then((data) => {
        const newDatas = data.map((featured: any) => {
          return {
            description: featured.short_description,
            id: featured._id,
            title: featured.name,
          };
        });

        setFeatureCatagories(newDatas);
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

        {featuredCatagories.map((f) => (
          <FeaturedRow
            description={f.description}
            id={f.id}
            title={f.title}
            key={f.id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
