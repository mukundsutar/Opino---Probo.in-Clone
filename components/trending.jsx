import React from "react";
import { Image, ScrollView } from "react-native";
import { Text, View } from "react-native";
import { Surface } from "react-native-paper";
import IPL from "../assets/ipl.png";
import Champions_League from "../assets/champions_league.png";
import Growth from "../assets/stocks.png";
import Bitcoin from "../assets/crypto.png";

export default function Trending() {
  const trending = [
    { name: "KOL v/s MUMB", image: IPL },
    { name: "PSG v/s Dortmund", image: Champions_League },
    { name: "BANG v/s CHE", image: IPL },
    { name: "Bitcoin", image: Bitcoin },
    { name: "Growth", image: Growth },
  ];

  return (
    <>
      <View className="w-full space-y-2">
        <Text className="mx-2 text-base font-bold">Trending Now</Text>

        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="m-3 ml-0 space-x-3 px-3 pl-1"
        >
          <View className="m-2 flex-row flex-wrap space-x-3">
            {trending.map((item, index) => (
              <Surface key={index} elevation={1} className="rounded-lg">
                <View className="flex-row items-center justify-center space-x-4 rounded-lg bg-white p-3 px-5">
                  <Image source={item.image} className="h-9 w-12" />

                  <Text>{item.name}</Text>
                </View>
              </Surface>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}
