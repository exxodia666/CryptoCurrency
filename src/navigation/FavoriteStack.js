import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './Screens/Screen';

const FavoritesStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorite" component={Screen} />
    </Stack.Navigator>
  );
};
export default FavoritesStack;
