import { Stack } from "expo-router/stack";
import { Image } from "react-native";

export default function Layout() {
  return (
    <Stack>
      {/* <Stack.Screen
        name="index"
        options={{
          title: "",
          headerLeft: () => (
            <Image
              source={require("../assets/person.png")}
              className="h-9 w-9 rounded-full border-black"
              resizeMode="contain"
            />
          ),
          headerRight: () => (
            <Image
              source={require("../assets/bell.png")}
              className="h-9 w-9"
              resizeMode="contain"
            />
          ),
          statusBarStyle: "dark",
        }}
      /> */}
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          statusBarHidden: false,
          statusBarStyle: "dark",
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          headerShown: false,
          presentation: "transparentModal",
          animation: "fade_from_bottom",
          statusBarHidden: false,
          statusBarStyle: "dark",
        }}
      />
    </Stack>
  );
}
