import {
  View,
  Text,
  SafeAreaView,
  ViewBase,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigation } from "expo-router";
import { useSelector } from "react-redux";
import { selectRestaurant } from "@/reducers/resturantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "@/reducers/basketSlice";
import { useDispatch } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/outline";
import { urlFor } from "@/sanity";

type Props = {};

const BasketScreen = (props: Props) => {
  const navigation = useNavigation();

  const restaurant = useSelector(selectRestaurant);

  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  const basketTotal = useSelector(selectBasketTotal);

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);

    console.log(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-green-500 bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <Pressable
            onPress={() => {
              navigation.goBack();
            }}
            className="rounded-full bg-gray-100 absolute top-3 right-5"
          >
            <XCircleIcon color="#00CCBBB" height={50} width={50} />
          </Pressable>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <Text className="flex-1">Deliver in 34-53 min</Text>
          <Pressable>
            <Text className="text-green-500">Change</Text>
          </Pressable>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-green-500">{items.length} x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-600">{items[0]?.price} ₺</Text>

              <Pressable>
                <Text
                  className="text-red-500 text-xs"
                  onPress={() => {
                    dispatch(removeFromBasket({ id: key }));
                  }}
                >
                  Remove
                </Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">{basketTotal} ₺</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">{5.99} ₺</Text>
          </View>
          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">{basketTotal + 5.99} ₺</Text>
          </View>

          <Pressable
            className="rounded-lg bg-green-500 p-4"
            onPress={() => {
              navigation.navigate("PreparingOrderScreen");
            }}
          >
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
