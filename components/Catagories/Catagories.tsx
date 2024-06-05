import { View, Text, ScrollView } from "react-native";
import React from "react";
import CatogoryCard from "./CatogoryCard";

const Catagories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CatogoryCard
        imgUrl="https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg"
        title="Test-1"
      />
      <CatogoryCard
        imgUrl="https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg"
        title="Test-2"
      />
      <CatogoryCard
        imgUrl="https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg"
        title="Test-3"
      />
      <CatogoryCard
        imgUrl="https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg"
        title="Test-4"
      />
      <CatogoryCard
        imgUrl="https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg"
        title="Test-5"
      />
      <CatogoryCard
        imgUrl="https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg"
        title="Test-6"
      />
      <CatogoryCard
        imgUrl="https://cdn.yemek.com/uploads/2023/07/surmene-doner-avrupa-yakasi-en-iyi-donerciler-sena.jpg"
        title="Test-7"
      />
    </ScrollView>
  );
};

export default Catagories;
