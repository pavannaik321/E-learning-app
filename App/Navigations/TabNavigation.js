import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import HomeScreenNavigation from './HomeScreenNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
      <Tab.Screen name="home" component={HomeScreenNavigation}
        options={{
            tabBarIcon:({color,size})=>{
               return <Ionicons name="home" size={size} color={color} />
            }
        }}
      />
      <Tab.Screen name="my-course" component={MyCourse} 
        options={{
            tabBarIcon:({color,size})=>{
               return <FontAwesome5 name="book-open" size={size} color={color} />
            }
        }}
      />
      <Tab.Screen name="leaderBoard" component={LeaderBoard} 
      options={{
        tabBarIcon:({color,size})=>{
           return <FontAwesome name="bar-chart-o" size={size} color={color} />
        }
    }}
      />
      <Tab.Screen name="profile" component={ProfileScreen} 
      options={{
        tabBarIcon:({color,size})=>{
           return <MaterialCommunityIcons name="human-greeting-variant" size={size} color={color} />
        }
    }}
      />
    </Tab.Navigator>
  )
}