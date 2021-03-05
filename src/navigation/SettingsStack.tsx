import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from './Screens/SettingsScreen';
import CustomStackNav from '../components/template/CustomStackNav';

const SettingsStack: React.FC = (): JSX.Element => {
  const Stack = createStackNavigator();
  return (
    <CustomStackNav>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </CustomStackNav>
  );
};
export default SettingsStack;
