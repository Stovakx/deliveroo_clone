import { View, Text, TouchableWithoutFeedback, Image} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../themes';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({item}) {
    console.log("item", item);
    const navigation = useNavigation();
  return (
   <TouchableWithoutFeedback
   onPress={()=> navigation.navigate('Restaurant', {...item})}>
    <View className="mr-6 bg-white rounded-3xl shadow-lg"
    style={{shadowColor: themeColors.bgColor(0.2), shadowRadius:7}}>
        <Image className="h-36 w-64 rounded-3xl" source={{uri: urlFor(item.image)}}/>
        <View className="px-3 pb-5 space-y-2">
            <Text className="text-lg font-bold pt-2">{item.name}</Text>
            <View className="flex-row items-center space-x-1">
                <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4"/>
                <Text className="text-xs">
                    <Text className="text-green-700">{item.stars}</Text>
                    <Text className="text-gray-700">
                        ({item.reviews} review) * <Text className="font-semibold">{item?.type?.name}</Text>
                    </Text>
                </Text>
            </View>
            <View className="flex-row items-center space-x-1">
                <Icon.MapPin color={"gray"} width={15} height={15}/>
                <Text className="text-gray-700 text-xs">Nearby {item.adress}</Text>
            </View>
        </View>
    </View>
   </TouchableWithoutFeedback>
  )
}