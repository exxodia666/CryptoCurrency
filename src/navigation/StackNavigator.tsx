import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CoinListScreen from './Screens/CoinListScreen';
import CoinScreen from './Screens/CoinScreen';
import { config } from '../config';
import CustomStackNav from '../components/template/CustomStackNav';
//import { RouteProp } from '@react-navigation/native';

const StackNavigator: React.FC = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <CustomStackNav>
      <Stack.Screen
        name="Home"
        component={CoinListScreen}
      />
      <Stack.Screen
        name="Coin"
        component={CoinScreen}
        options={(navigation: any) => {
          return {
            title: `${navigation.route.params.name} | ${navigation.route.params.symbol}`
          }
        }}
      />
    </CustomStackNav>
  );
};
export default StackNavigator;
