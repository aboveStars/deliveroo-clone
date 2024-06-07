import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import { selectRestaurant } from "@/reducers/resturantSlice";
import { XCircleIcon } from "react-native-heroicons/outline";

import * as Progress from "react-native-progress";

import MapView, { Marker } from "react-native-maps";

type Props = {};

const DeliveryScreen = (props: Props) => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="bg-cyan-500 flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <XCircleIcon color="white" size={30} />
          </Pressable>
          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View>
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              <Text className="text-4xl font-bold">34-53 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={50} color="cyan.500" indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        style={{ flex: 1, width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.001,
          longitudeDelta: 0.001,
        }}
      >
        <Marker
          coordinate={{
            latitude: 41.0082,
            longitude: 28.9784,
          }}
          title={restaurant.title}
          description={restaurant.short_description}
          identifier="origin"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28 gap-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Sonny Sangha</Text>
          <Text className="text-gray-400 ">Your Rider</Text>
        </View>

        <Text className="text-cyan-500 text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
