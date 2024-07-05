import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Image, Text } from "react-native";
import { Surface } from "react-native-paper";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { paddingBottom: 12, paddingTop: 12, height: 70 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: () => <Text>Home</Text>,
          statusBarStyle: "dark",
          tabBarIcon: () => (
            <MaterialIcons name="home-filled" size={24} color="black" />
          ),
          tabBarActiveTintColor: "#000",
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
          title: "Search",
          tabBarLabel: () => <Text>Search</Text>,
          tabBarIcon: () => (
            <MaterialIcons name="search" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="sports"
        options={{
          title: "Sports",
          tabBarLabel: () => <Text>Sports</Text>,
          tabBarIcon: () => (
            <MaterialCommunityIcons name="trophy" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarLabel: () => <Text>Portfolio</Text>,
          tabBarIcon: () => (
            <FontAwesome name="briefcase" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: "Wallet",
          tabBarLabel: () => <Text>Wallet</Text>,
          tabBarIcon: () => (
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
