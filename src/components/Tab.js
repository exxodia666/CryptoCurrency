import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components';

function TabButton({ name, label, onPress, accessibilityState }) {
  console.log(accessibilityState);

  /*
    const StyledText = styled.Text`
      padding-left: 4px;
      color: black;
      fontSize: 19px;
      font-family: 'Poppins-Medium',
    `;*/
  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={() => {
        onPress();
      }}>
      <View
        style={{
          //flex: 1 / 3,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: accessibilityState.selected ? '60%' : '40%',
          //backgroundColor: accessibilityState.selected ? 'red' : 'white',
        }}>
        <Icon name={name} size={28} />
        {accessibilityState.selected && (
          <Text style={{
            paddingLeft: 5,
            fontSize: 16.5,
            //borderWidth: 0.5,
            textAlignVertical: 'top',
            textAlign: 'center',
          }}>
            {label}
          </Text>
        )}
      </View>
    </TouchableOpacity >
  );
}
export default TabButton;
/*
style={{
  padding: 0,
  height: 16.5,
  //width: 16.5,
  textAlignVertical: 'top',
  textAlign: 'center',
  fontSize: 16.5,
  fontFamily: 'Poppins-Medium',
  borderWidth: 0.5
}}*/