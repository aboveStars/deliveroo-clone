import { View, Text, Pressable, Image, ViewBase } from "react-native";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "@/reducers/basketSlice";

type Props = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

const Dishrow = ({ description, id, image, name, price }: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const itemsForThisRow = useSelector((state) =>
    selectBasketItemsWithId(state, id)
  );
  const itemsForAllBasket = useSelector(selectBasketItems);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id, name, description, price, image }));
  };

  useEffect(() => {
    console.log(itemsForThisRow);
  }, [itemsForThisRow]);

  useEffect(() => {
    console.log(itemsForAllBasket);
  }, [itemsForAllBasket]);

  return (
    <>
      <Pressable
        className={`bg-white border p-4 border-gray-200 flex-row items-center ${
          isPressed && "border-b-0"
        }`}
        onPress={() => {
          setIsPressed(true);
        }}
      >
        <View className="flex-1">
          <Text className="text-lg mb-1">{name}</Text>
          <Text className="text-gray-400">{description}</Text>
          <Text className="text-gray-400">₺{price}</Text>
        </View>
        <View className="h-20 w-20 bg-gray-300 rounded-full mt-4">
          <Image
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            source={{
              uri: urlFor(image).url(),
            }}
            className="h-20 w-20 bg-gray-300 pt-4"
          />
        </View>
      </Pressable>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <Pressable onPress={removeItemFromBasket}>
              <MinusCircleIcon
                color={`${itemsForThisRow.length !== 0 ? "#00CCBB" : "gray"}`}
                size={40}
              />
            </Pressable>
            <Text>{itemsForThisRow.length}</Text>
            <Pressable onPress={addItemToBasket}>
              <PlusCircleIcon color="#00CCBB" size={40} />
            </Pressable>
          </View>
        </View>
      )}
    </>
  );
};

export default Dishrow;
