import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

function TabButton({ name, label, onPress, accessibilityState, }) {

    const func = () => {
        console.log('Alo blya');
        onPress();
    }
    return (

        <TouchableWithoutFeedback onPress={() => { console.log("FAAAAAAAAAAAAAK") }}>
            <Icon style={{
            }}
                name={name}
                size={20}
            />
            <Text style={{
                fontSize: 16,
                fontFamily: 'Poppins-Medium',
                //borderWidth: 0.5 
            }}>
                {"label"}
            </Text>
        </TouchableWithoutFeedback>

    )
};
export default TabButton;
