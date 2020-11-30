import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from './Screens/SettingsScreen';

const SettingsStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
export default SettingsStack;
