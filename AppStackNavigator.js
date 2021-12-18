import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import FamilyReadScreen from '../screens/FamilyReadScreen';
import InformationScreen  from '../screens/InformationScreen';




export const AppStackNavigator = createStackNavigator({
  FamilyReadList : {
    screen : FamilyReadScreen,
    
      headerShown : false
    
  },
    InformationScreen : {
    screen : InformationScreen,
   
      headerShown : false
    
  },

},
  {
    initialRouteName: 'FamilyReadList'
  }
);
