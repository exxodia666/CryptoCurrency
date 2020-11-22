import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import SettingsScreen from './Screens/SettingsScreen';
import Feather from 'react-native-vector-icons/Feather';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={({route}) => ({
          tabBarIcon: () => {
            return <Feather name="home" size={25} color="grey" />;
          },
        })}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={({route}) => ({
          tabBarIcon: () => {
            return <Feather name="settings" size={25} color="grey" />;
          },
        })}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
