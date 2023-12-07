import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { getFeaturedRestaurants } from "../sanity/api";


export default function HomeScreen() {
  const [FeaturedRestaurants, setGetFeaturedRestaurants] = useState([]);

  useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setGetFeaturedRestaurants(data);
    })
  },[])
  return (
    <SafeAreaView className="bg-white ">
      <SearchBar />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom:30 }}
        className="mb-12"
      >
        <Categories />
        <View className="mt-5">
          {
            FeaturedRestaurants.map((item, index) => {
            return (
              <FeaturedRow
                key={index}
                title={item.name}
                restaurants={item.restaurants}
                description={item.description}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
