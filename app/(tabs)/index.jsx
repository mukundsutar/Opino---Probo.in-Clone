import { Image, ScrollView } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { PaperProvider } from "react-native-paper";
import Category from "../../components/category";
import Trending from "../../components/trending";
import Question from "../../components/question";

export default function Tab() {
  const card = [
    "Kolkata to win the match vs Mumbai?",
    "H2H last 5 T20 : Kolkata 4, Mumbai 1. DRAW O",
    "Yes e 5.3",
    "NO e 4.7",
  ];

  const arr = ["", "", "", "", "", "", "", ""];

  return (
    <PaperProvider>
      <ScrollView className="flex-col bg-zinc-100">
        {/* banner */}
        <View className="w-full items-center justify-center p-2">
          <Image
            source={require("../../assets/swim.png")}
            className="h-36 w-full"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
