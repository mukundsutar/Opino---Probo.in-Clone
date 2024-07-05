import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Notification from "../../assets/bell.png";
import { Tabs } from "expo-router";
import { Image } from "react-native";
import { Badge, Surface } from "react-native-paper";
import { Userpic } from "react-native-userpic";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "",
          statusBarStyle: "dark",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home-filled" size={24} color="black" />
          ),
          headerLeft: () => (
            <Image
              source={require("../../assets/person.png")}
              className="ml-2 h-9 w-9"
              resizeMode="contain"
              tintColor="#000"
            />
          ),
          headerRight: () => (
            <Surface
              mode="flat"
              className="mr-2 rounded-full border border-black/10 bg-white"
            >
              <Image
                source={require("../../assets/bell.png")}
                className="h-9 w-9 rounded-full"
                resizeMode="contain"
                tintColor="#000"
              />
            </Surface>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="trophy" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="briefcase" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Tabs>
  );
}
