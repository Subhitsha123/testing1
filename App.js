import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import FbScreen from './screens/fb';
import InSCreen from './screens/in';

export default function App() {
  return (
   <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  Facebook:{screens:FbScreen},
  Instagram:{screens:InScreen}
});

const AppContainer = createAppContainer(TabNavigator);
