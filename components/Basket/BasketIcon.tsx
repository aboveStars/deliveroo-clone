import { selectBasketItems, selectBasketTotal } from "@/reducers/basketSlice";
import { useNavigation } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);

  return (
    <View className="absolute bottom-10 w-full z-50">
      <Pressable
        className="mx-5 bg-red-300 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={() => {
          // @ts-ignore
          navigation.navigate("Basket");
        }}
      >
        <Text className=" text-white font-extrabold text-lg bg-red-500 py-1 px-2">
          {items.length}
        </Text>

        <Text className="flex-1 text-white font-extrabold text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {basketTotal}₺
        </Text>
      </Pressable>
    </View>
  );
};

export default BasketIcon;
