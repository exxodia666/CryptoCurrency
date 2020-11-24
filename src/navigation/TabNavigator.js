import * as React from 'react';
import StackNavigator from './StackNavigator';
import SettingsScreen from './Screens/SettingsScreen';
import TabButton from '../components/Tab';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
            <TabButton name="settings" label="Settings" {...props} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
