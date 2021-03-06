import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CoinListScreen from './Screens/CoinListScreen';
import CoinScreen from './Screens/CoinScreen';

const StackNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={CoinListScreen} />
      <Stack.Screen name="Coin" component={CoinScreen} />
    </Stack.Navigator>
  );
};
export default StackNavigator;
