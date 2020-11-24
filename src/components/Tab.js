import * as React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function TabButton({name, label, onPress, accessibilityState}) {
  console.log(accessibilityState);
  return (
    <TouchableOpacity
      onPress={() => {
        onPress();
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: accessibilityState.selected ? 'red' : 'white',
        }}>
        <Icon style={{}} name={name} size={20} />
        {accessibilityState.selected && (
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Poppins-Medium',
              //borderWidth: 0.5
            }}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}
export default TabButton;
