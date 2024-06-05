import { View, Text, ViewBase } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import { ScrollView } from "react-native-gesture-handler";
import RestaurantCard from "../Catagories/RestaurantCard";

type Props = {
  title: string;
  description: string;
  id: string;
};

const FeaturedRow = ({ description, id, title }: Props) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        <RestaurantCard
          address="Istanbul"
          dishes={[]}
          genre="Et"
          id="1"
          imageUrl="https://theistanbulinsider.com/wp-content/uploads/2010/12/doner-kebap-istanbul.jpg"
          lat={0}
          long={0}
          rating={0}
          shortDescription="Most delicious doner is here!"
          title="Donerci Yunus"
        />
        <RestaurantCard
          address="Istanbul"
          dishes={[]}
          genre="Et"
          id="1"
          imageUrl="https://theistanbulinsider.com/wp-content/uploads/2010/12/doner-kebap-istanbul.jpg"
          lat={0}
          long={0}
          rating={0}
          shortDescription="Most delicious doner is here!"
          title="Donerci Yunus"
        />
        <RestaurantCard
          address="Istanbul"
          dishes={[]}
          genre="Et"
          id="1"
          imageUrl="https://theistanbulinsider.com/wp-content/uploads/2010/12/doner-kebap-istanbul.jpg"
          lat={0}
          long={0}
          rating={0}
          shortDescription="Most delicious doner is here!"
          title="Donerci Yunus"
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
