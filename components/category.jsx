import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

export default function Category() {
  const sports = [
    "Cricket",
    "Crypto",
    "Football",
    "Stocks",
    "Economy",
    "News",
    "Basketball",
    "YouTube",
    "Chess",
  ];

  return (
    <>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className="my-4 mt-2 h-auto space-x-2 p-2 px-2"
      >
        {sports.map((item, index) => (
          <View
            key={index}
            className="flex-col items-center justify-center space-y-1 rounded-lg bg-white p-3 px-5"
          >
            <Image
              source={require("../assets/cricket.png")}
              className="h-9 w-9"
            />

            <Text>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
}
