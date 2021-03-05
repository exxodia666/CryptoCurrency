import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { config } from '../../config';

const CustomStackNav: React.FC = ({ children }) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: config.light.header.color,
                },
                headerTintColor: config.light.header.font_color,
                headerTitleStyle: {
                    fontFamily: config.light.header.fontFamily,
                },
            }}
        >{children}</Stack.Navigator>
    )
}

export default CustomStackNav
