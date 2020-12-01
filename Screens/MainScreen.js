import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import MenuTab from './MenuTab';
import CartTab from './CartTab';
import ProfileScreen from './ProfileScreen';
import React from 'react';


export default function MainScreen(){
  const Tab = createMaterialBottomTabNavigator();
  const darkgrey = "#121212";
  const white = "#fff";
  const lightgrey = "#d3d3d3"
    return(
        <Tab.Navigator
        initialRouteName="Menu"
        activeColor={darkgrey}
        inactiveColor={lightgrey}
        shifting>
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
           tabBarLabel:'Profile',
           tabBarColor:white,
           tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="account" color={color} size={24}/>
          ), 
        }}/>

        <Tab.Screen name="Menu" component={MenuTab} options={{
           tabBarLabel:'Menu',
           tabBarColor:white,
           tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="silverware" color={color} size={24}/>
          ), 
        }}/>
        <Tab.Screen name="Cart" component={CartTab} options={{
          tabBarLabel:'Cart',
          tabBarColor:white,
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons name="cart-outline" color={color} size={24}/>
          )
        }}/>
      </Tab.Navigator>
    );
}