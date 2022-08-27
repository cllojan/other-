import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import AudioList from '../screens/AudioList';
import Player from '../screens/Player';
import PlayerList from '../screens/PlayerList';
import { StyleSheet } from 'react-native';
import { Feather,Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { height:60,paddingTop:5 ,paddingBottom:10},
    }}>
      <Tab.Screen 
      name="AudioList" 
      component={AudioList}
      options={{
        tabBarIcon:({color, size}) =>(
          <Ionicons name="ios-headset-outline" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="Player" 
      component={Player}
      options={{
        tabBarIcon:({color, size}) =>(
          <Feather name="disc" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="PlayerList" 
      component={PlayerList}
      options={{
        tabBarIcon:({color, size}) =>(
          <MaterialCommunityIcons name="playlist-music-outline" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  )
}


export default AppNavigator

