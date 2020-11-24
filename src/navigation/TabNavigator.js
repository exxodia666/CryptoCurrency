import * as React from 'react';
import StackNavigator from './StackNavigator';
import SettingsScreen from './Screens/SettingsScreen';
import TabButton from '../components/Tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen from './Screens/Screen';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarButton: (props) => (
            <TabButton name="home" label="Home" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: (props) => (
            <TabButton name="gear" label="Settings" {...props} />
          ),
        }}
      />

      <Tab.Screen
        name="Screen"
        component={Screen}
        options={{
          tabBarButton: (props) => (
            <TabButton name="gear" label="Screen" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
