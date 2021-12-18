import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FamilyReadScreen from '../screens/FamilyReadScreen'
import FamilyWriteScreen from '../screens/FamilyWriteScreen';


export const AppTabNavigator = createBottomTabNavigator({
  FamilyRead : {
    screen: FamilyReadScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/listingImage.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "FamilyRead",
    }
  },
  FamilyWrite: {
    screen: FamilyWriteScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/readingImage.jpg")} style={{width:20, height:20}}/>,
      tabBarLabel : "FamilyWrite",
    }
  }
});
