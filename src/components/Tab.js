import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import styled from 'styled-components';

function TabButton({ name, label, onPress, accessibilityState }) {
  const ref = React.useRef();
  const transition = (<Transition.Sequence>
    <Transition.Out type='fade' delayMs={0} />
    <Transition.Change interpolation='easeOut' delayMs={10} />
    <Transition.In type='fade' delayMs={10} />
  </Transition.Sequence>)

  return (
    <TouchableOpacity
      style={{
        flex: 1,
      }}
      onPress={() => {
        ref.current.animateNextTransition();
        onPress();
      }}>
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: accessibilityState.selected ? 'rgba(0,0,0,0.5)' : 'white',
          borderRadius: 30,
          margin: 5,
        }}>
        <Icon name={name} size={28} />
        {accessibilityState.selected && (
          <Text
            style={{
              paddingLeft: 8,
              fontSize: 16.5,
              //borderWidth: 0.5,
              textAlignVertical: 'top',
              textAlign: 'center',
              fontFamily: 'NotoSansJP-Medium'
            }}>
            {label}
          </Text>
        )}
      </Transitioning.View>
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
