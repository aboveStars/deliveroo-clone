import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";

import RestaurantCard from "../Catagories/RestaurantCard";
import { SanityClient } from "@sanity/client";
import { client } from "@/sanity";
import { restaurant } from "@/deliveroo-clone-1/schemaTypes/restaurant";

type Props = {
  title: string;
  description: string;
  id: string;
};

const FeaturedRow = ({ description, id, title }: Props) => {
  const [restaurants, setRestaurants] = useState<
    {
      address: string;
      short_description: string;
      dishes: string[];
      long: number;
      lat: number;
      rating: number;
      _id: string;
      image: string;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "featured" && _id=="${id}"] {
      ...,
      restaurants[] -> {
        ...,
        dishes[] -> {
          ...
        }
      }
    }`
      )
      .then((data) => {
        const dataFethced: {
          address: string;
          short_description: string;
          dishes: string[];
          long: number;
          lat: number;
          rating: number;
          _id: string;
          image: string;
          name: string;
        }[] = data[0].restaurants;

        setRestaurants(dataFethced);
      });
  }, [id]);

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
        {restaurants?.map((r) => (
          <RestaurantCard
            key={r._id}
            id={r._id}
            title={r.name}
            rating={r.rating}
            genre={r.short_description}
            address={r.address}
            imageUrl={r.image}
            long={r.long}
            lat={r.lat}
            dishes={r.dishes}
            short_description={r.short_description}
          />
        ))}
        {restaurants?.map((r) => (
          <RestaurantCard
            key={r._id}
            id={r._id}
            title={r.name}
            rating={r.rating}
            genre={r.short_description}
            address={r.address}
            imageUrl={r.image}
            long={r.long}
            lat={r.lat}
            dishes={r.dishes}
            short_description={r.short_description}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
