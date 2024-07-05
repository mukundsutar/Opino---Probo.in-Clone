import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Cricket from "../assets/cricket.png";
import Crypto from "../assets/crypto.png";
import Football from "../assets/football.png";
import Stocks from "../assets/stocks.png";
import Economy from "../assets/economy.png";
import News from "../assets/news.png";
import Basketball from "../assets/basketball.png";
import YouTube from "../assets/youtube.png";
import Chess from "../assets/chess.png";
import { Surface } from "react-native-paper";

export default function Category() {
  const sports = [
    { name: "Cricket", image: Cricket },
    { name: "Crypto", image: Crypto },
    { name: "Football", image: Football },
    { name: "Stocks", image: Stocks },
    { name: "Economy", image: Economy },
    { name: "News", image: News },
    { name: "Basketball", image: Basketball },
    { name: "YouTube", image: YouTube },
    { name: "Chess", image: Chess },
  ];

  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="my-4 mt-2 h-auto space-x-2 p-2 px-2"
      >
        {sports.map((item, index) => (
          <Surface elevation={1} className="mb-1 rounded-xl">
            <View
              key={index}
              className="flex-col items-center justify-center space-y-1 rounded-xl bg-white p-3 px-5"
            >
              <Image source={item.image} className="h-9 w-9" tintColor="#000" />

              <Text>{item.name}</Text>
            </View>
          </Surface>
        ))}
      </ScrollView>
    </>
  );
}
