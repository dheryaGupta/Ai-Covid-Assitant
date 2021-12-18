import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import ButtonScreen from './screens/ButtonScreen';
import InformationScreen from './screens/InformationScreen';
import FamilyReadScreen from './screens/FamilyReadScreen';
import FamilyWriteScreen from './screens/FamilyWriteScreen';
import { AppTabNavigator } from './components/AppTabNavigator';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

const switchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  ButtonScreen: { screen: ButtonScreen },
  Drawer: { screen: AppDrawerNavigator },
  BottomTab: { screen: AppTabNavigator },
  InformationScreen: { screen: InformationScreen },
});
const AppContainer = createAppContainer(switchNavigator);
