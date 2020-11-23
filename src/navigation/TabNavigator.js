import * as React from 'react';
import StackNavigator from './StackNavigator';
import SettingsScreen from './Screens/SettingsScreen';
import TabButton from '../components/Tab';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarButton: (props) => (<TabButton{...props} />)
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarButton: (props) => (<TabButton{...props} />)
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
