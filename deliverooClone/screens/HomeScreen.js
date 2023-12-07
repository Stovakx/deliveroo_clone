import { View, Text, TextInput, ScrollView } from "react-native";
import React, { useEffect, useState} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { getFeaturedRestaurants } from "../sanity/api";


export default function HomeScreen() {
  const [featuredCategories, setFeaturedCategories] = useState([]);

  useEffect(()=>{
    getFeaturedRestaurants().then(data=>{
      setFeaturedCategories(data);
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
            featuredCategories.map(category => {
            return (
              <FeaturedRow
                key={category._id}
                id={category._id}
                title={category.name}
                restaurants={category.restaurants}
                description={category.description}
                featuredCategory={category._type}
              />
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
