import { Link, router } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { Button, Surface } from "react-native-paper";

export default function Question() {
    return (
        <>
            <View className="bg-white m-3 justify-center items-start space-y-2 rounded-md">
                <Surface elevation={1} className="rounded-lg bg-white">
                    <View className="flex-row items-center space-x-4">
                        <View className="space-y-5 p-4 pb-3">
                            <Text className="text-base font-bold">
                                Kolkata to win the match vs Mumbai?
                            </Text>
                            <Text className="text-xs">
                                H2H last 5 T20 : Kolkata 4, Mumbai 1. DRAW O
                            </Text>
                        </View>

                        <Image
                            source={require("../assets/ipl.png")}
                            className="h-9 w-12"
                        />
                    </View>

                    <View className="w-full flex-row p-4 pt-0 space-x-2 items-center">
                        <Button
                            mode="outlined"
                            className="rounded w-[49%]"
                            textColor="#5d66eb"
                            buttonColor="#e0eaff"
                            onPress={() => {
                                router.push("/modal");
                            }}
                        >
                            <Text className="font-bold text-base">
                                Yes ₹ 5.3
                            </Text>
                        </Button>

                        <Button
                            mode="outlined"
                            className="rounded w-[49%]"
                            textColor="#da3024"
                            buttonColor="#fee4e2"
                            onPress={() => {
                                router.push("/modal");
                            }}
                        >
                            <Text className="font-bold text-base">
                                No ₹ 4.7
                            </Text>
                        </Button>
                    </View>
                </Surface>
            </View>
        </>
    );
}
