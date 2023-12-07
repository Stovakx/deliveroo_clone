import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../themes'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({id ,title, restaurants,description}) {
  return (
    <View >
      <View className="flex-row justify-between items-center px-4">
        <View>
            <Text className="font-bold text-lg">{title}</Text>
            <Text className="text-gray-500 text-xs">{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={{color: themeColors.text}} className="text-semibold">See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal:15}}
      className="overflow-visible mt-2">
        {
            restaurants.map((restaurant)=>{
                return(
                    <RestaurantCard
                    key={restaurant._id}
                    id={restaurant._id}
                    imgUrl={restaurant.image}
                    title={restaurant.name}
                    rating={restaurant.rating}
                    type={restaurant.type?.name}
                    adress={"123 main street"}
                    description={restaurant.description}
                    dishes={restaurant.dishes}
                    lng={restaurant.lng}
                    lat={restaurant.lat}
                    />
                )
            })
        }
      </ScrollView>
    </View>
  )
}