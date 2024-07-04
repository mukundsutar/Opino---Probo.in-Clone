import { Image, ScrollView, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import Question from "../components/question";
import Trending from "../components/trending";
import Category from "../components/category";

export default function Page() {
    const card = [
        "Kolkata to win the match vs Mumbai?",
        "H2H last 5 T20 : Kolkata 4, Mumbai 1. DRAW O",
        "Yes e 5.3",
        "NO e 4.7",
    ];

    const arr = ["", "", "", "", "", "", "", ""];

    return (
        <PaperProvider>
            <ScrollView className="bg-zinc-100 flex-col">
                {/* banner */}
                <View className="w-full p-2 justify-center items-center">
                    <Image
                        source={require("../assets/swim.png")}
                        className="w-full h-36"
                        resizeMode="contain"
                    />
                </View>

                <Category />

                <Trending />

                {arr.map((_, index) => (
                    <Question key={index} />
                ))}
            </ScrollView>
        </PaperProvider>
    );
}
