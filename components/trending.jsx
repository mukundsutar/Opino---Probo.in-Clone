import React from "react";
import { Image, ScrollView } from "react-native";
import { Text, View } from "react-native";
import { Surface } from "react-native-paper";

export default function Trending() {
    const trending = [
        "KOL v/s MUMB",
        "PSG v/s Dortmund",
        "BANG v/s CHE",
        "Bitcoin",
        "Growth",
    ];

    return (
        <>
            <View className="w-full space-y-2">
                <Text className="mx-2">Trending Now</Text>

                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    className="m-3 space-x-3 px-3 ml-0 pl-1"
                >
                    <View className="flex-row flex-wrap space-x-3 m-2">
                        {trending.map((item, index) => (
                            <Surface
                                key={index}
                                elevation={1}
                                className="rounded-lg"
                            >
                                <View className="bg-white justify-center items-center flex-row space-x-4 p-3 px-5 rounded-lg">
                                    <Image
                                        source={require("../assets/ipl.png")}
                                        className="h-9 w-12"
                                    />

                                    <Text>{item}</Text>
                                </View>
                            </Surface>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </>
    );
}
