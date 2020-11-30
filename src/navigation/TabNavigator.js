import * as React from 'react';
import StackNavigator from './StackNavigator';
import TabButton from '../components/Tab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsStack from './SettingsStack';

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
        name="SettingsStack"
        component={SettingsStack}
        options={{
          tabBarButton: (props) => (
            <TabButton name="gear" label="Settings" {...props} />
          ),
        }}
      />
      {/*
      <Tab.Screen
        name="Screen"
        component={Screen}
        options={{
          tabBarButton: (props) => (
            <TabButton name="gear" label="Screen" {...props} />
          ),
        }}
      />*/}
    </Tab.Navigator>
  );
};
export default TabNavigator;
