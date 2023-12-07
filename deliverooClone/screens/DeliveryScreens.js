import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { featured } from "../constants";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { themeColors } from "../themes";
import * as Icon from "react-native-feather";

export default function DeliveryScreens() {
  const restaurant = featured.restaurants[0];
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>
      <View className="rounded-t-3xl -mt-12 bg-white relative">
        <View className="flex-row justify-between px-5 pt-10">
          <View>
            <Text className="text-lg text-gray-700 font-semibold">
              Estimated Arrival
            </Text>
            <Text className="text-lg text-gray-700 font-semibold">
              20-30 minutes
            </Text>
            <Text className="text-gray-700 font-semibold mt-2">
              Your order is on its way!
            </Text>
          </View>
          <Image
            className="w-24 h-24"
            source={require("../assets/images/bikeGuy2.gif")}
          />
        </View>
        <View
          style={{ backgroundColor: themeColors.bgColor(0.9) }}
          className="p-2 flex-row justify-between items-center rounded-full my-5 mx-2"
        >
          <View
            className="p-1 rounded-full"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
          >
            <Image
              className="h-16 w-16 rounded-full"
              source={require("../assets/images/deliveryGuy.png")}
            />
          </View>
          <View className="flex ml-3">
            <Text className="text-lg font-bold text-white">
              Deliver Guy Name
            </Text>
            <Text className=" font-semibold text-white">Your delivery guy</Text>
          </View>
          <View className="flex-row items-center space-x-3 mr-3">
          {/* onPress aby to vybralo telefon */}
            <TouchableOpacity className="bg-white p-2 rounded-full">
              <Icon.Phone
                fill={themeColors.bgColor(1)}
                strokeWidth={1}
                stroke={themeColors.bgColor(1)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-white p-2 rounded-full"
              onPress={() => navigation.navigate("Home")}
            >
              <Icon.X
                fill={themeColors.bgColor(1)}
                strokeWidth={1}
                stroke={"red"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
