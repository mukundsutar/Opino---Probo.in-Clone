import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Appbar, PaperProvider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <PaperProvider>
            <Appbar.Header className="h-5 justify-between items-center p-0">
                <Appbar.Action className="bg-red-700" icon="calendar" onPress={() => {}} />
                <Appbar.Action icon="magnify" onPress={() => {}} />
            </Appbar.Header>
            <SafeAreaView>
                <View className="w-full h-full bg-gray-500 ">
                    <Text>Hello World!</Text>
                    <StatusBar style="auto" />
                </View>
            </SafeAreaView>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
