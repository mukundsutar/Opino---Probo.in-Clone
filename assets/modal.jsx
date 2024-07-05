import { View, Image } from "react-native";
import { Text } from "react-native";
import { useState } from "react";
import {
  Button,
  Divider,
  IconButton,
  Surface,
  TouchableRipple,
} from "react-native-paper";
import Slider from "@react-native-community/slider";
import SwipeButton from "rn-swipe-button";
import arrow from "../../assets/double_arrow.png";
import { BlurView } from "expo-blur";

export default function Modal() {
  const [toggleButton, setToggleButton] = useState(true);
  const [swipeStatusMessage, setSwipeStatusMessage] =
    useState(defaultStatusMessage);
  const defaultStatusMessage = "swipe status appears here";

  const updateSwipeStatusMessage = (message) => setSwipeStatusMessage(message);

  return (
    <BlurView intensity={100} tint="#afb">
      <View className="mt-[85%] w-full flex-col items-center rounded-3xl bg-slate-100">
        <Surface
          elevation={5}
          className="w-full flex-col items-center rounded-3xl bg-slate-100 p-7 py-10"
        >
          <View className="mb-2 w-full flex-row justify-between">
            <Text className="text-base font-bold">
              Kolkata to win the match v/s Mumbai?
            </Text>
            <Image source={require("../../assets/ipl.png")} className="h-9 w-12" />
          </View>

          <Surface elevation={2} className="m-4 w-full rounded-full">
            <View className="h-14 flex-row items-center justify-center">
              {/* is true */}
              <Button
                mode={toggleButton ? "contained" : ""}
                buttonColor={toggleButton ? "#444ce7" : ""}
                className="h-full w-[50%] items-center justify-center rounded-full"
                onPress={() => {
                  setToggleButton(!toggleButton);
                }}
              >
                <Text className="text-base">Yes ₹ 5.3</Text>
              </Button>

              {/* if false */}
              <Button
                mode={toggleButton ? "" : "contained"}
                buttonColor={toggleButton ? "" : "#444ce7"}
                className="h-full w-[50%] items-center justify-center rounded-full"
                onPress={() => {
                  setToggleButton(!toggleButton);
                }}
              >
                <Text className="text-base">No ₹ 4.7</Text>
              </Button>
            </View>
          </Surface>

          <View className="mb-5 mt-3 w-full flex-col space-x-2 rounded-2xl border p-3">
            <View className="flex-row justify-between">
              <Text className="text-base font-bold">Price</Text>

              <View className="flex-col items-end">
                <Text className="text-base font-bold">₹ 5.3</Text>
                <Text className="text-xs">132045 qty available</Text>
              </View>
            </View>

            <View className="flex-row items-center justify-center">
              <IconButton
                mode="contained-tonal"
                icon="minus"
                className="rounded-xl"
              />

              <Slider
                style={{ flexGrow: 1, height: 40 }}
                minimumValue={0}
                maximumValue={100}
                thumbTintColor="#000"
                minimumTrackTintColor="#000"
                maximumTrackTintColor="#98a2b3"
              />

              <IconButton
                mode="contained-tonal"
                icon="plus"
                className="rounded-xl"
              />
            </View>

            <Divider className="m-4" bold={true} />

            <View className="flex-row justify-between">
              <View className="flex-col items-center">
                <Text className="font-bold">₹ 5.3</Text>
                <Text className="text-sm">You put</Text>
              </View>

              <View className="flex-col items-center">
                <Text className="font-bold">₹ 10</Text>
                <Text className="text-sm">You get</Text>
              </View>
            </View>
          </View>

          <View className="w-full">
            <SwipeButton
              shouldResetAfterSuccess={true}
              onSwipeSuccess={() => updateSwipeStatusMessage("Slide success!")}
              disabledRailBackgroundColor="#444ce7"
              railBackgroundColor="#444ce7"
              railFillBackgroundColor="#444ce7"
              thumbIconBackgroundColor="#fff"
              railFillBorderColor="#fff"
              thumbIconBorderColor="#444ce7"
              thumbIconImageSource={arrow}
              resetAfterSuccessAnimDuration={2}
              resetAfterSuccessAnimDelay={5}
              title="Swipe for Yes"
              titleColor="#fff"
              titleFontSize={12}
            />
          </View>

          <Text className="mt-2 text-sm">Available Balance : 400.00</Text>
        </Surface>
      </View>
    </BlurView>
  );
}
