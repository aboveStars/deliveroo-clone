import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import CatogoryCard from "./CatogoryCard";
import { client, urlFor } from "@/sanity";

const Catagories = () => {
  const [catagories, setCatagories] = useState<
    { title: string; image: string }[]
  >([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "category"] {
      ...,
    }`
      )
      .then((data) => {
        console.log(data);
        setCatagories(
          data.map((d: any) => {
            return {
              title: d.title,
              image: d.image,
            };
          })
        );
      });
  }, []);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {catagories.map((c) => (
        <CatogoryCard
          imgUrl={urlFor(c.image).url()}
          title={c.title}
          key={c.title}
        />
      ))}
      {catagories.map((c) => (
        <CatogoryCard
          imgUrl={urlFor(c.image).url()}
          title={c.title}
          key={c.title}
        />
      ))}
    </ScrollView>
  );
};

export default Catagories;
