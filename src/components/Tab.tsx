import * as React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Transition, Transitioning } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { config } from '../config';

interface ITabButton {
  name: string
  label: string
  onPress: () => void
  accessibilityState: { selected: boolean }
}
const TabButton: React.FC<ITabButton> = ({
  name,
  label,
  onPress,
  accessibilityState,
}): JSX.Element => {

  const ref = React.useRef();

  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" delayMs={0} />
      <Transition.Change interpolation="easeOut" delayMs={10} />
      <Transition.In type="fade" delayMs={10} />
    </Transition.Sequence>
  );

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
          backgroundColor: accessibilityState.selected
            ? config.light.tabBar.color
            : 'white',
          borderRadius: 30,
          margin: 5,
        }}>
        <Icon name={name} size={28} color={accessibilityState.selected ? config.light.tabBar.font_color : config.light.tabBar.color} />
        {accessibilityState.selected && (
          <Text
            style={{
              color: config.light.tabBar.font_color,
              paddingLeft: 8,
              fontSize: config.light.tabBar.font_size,
              textAlignVertical: 'top',
              textAlign: 'center',
              fontFamily: config.light.tabBar.fontFamily,
            }}>
            {label}
          </Text>
        )}
      </Transitioning.View>
    </TouchableOpacity>
  );
};
export default TabButton;