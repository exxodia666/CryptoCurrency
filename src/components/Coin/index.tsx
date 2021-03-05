import React from 'react';
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from './Icon';
import Title from './Title';
import Price from './Price';
import { config } from '../../config';
import Card from '../template/Card';
interface Coin {
  index: number
  y: Animated.Value
  name: string
  symbol: string
  url: string
  changeHour: number
  changeDay: number
  price: number
  navigation: any
  currency: string
}

const Coin: React.FC<Coin> = ({ name, symbol, url, changeHour, price, navigation, currency, changeDay, y, index }) => {
  console.log(index);
  const { height: wHeigth } = Dimensions.get('window');
  const height = wHeigth;
  const position = Animated.subtract(index * 100, y);
  const isDisappearing = - 100;
  const isAppearing = height;
  const isTop = 0;
  const isBottom = height - 100;

  const scale = position.interpolate({
    inputRange: [isDisappearing, isTop, isBottom, isAppearing],
    outputRange: [0.5, 1, 1, 0.5],
    extrapolate: 'clamp'
  })

  const translateY = Animated.add(y, y.interpolate({
    inputRange: [0, index * 110],
    outputRange: [0, -index * 110],
    extrapolateRight: "clamp"
  }));

  return (
    <TouchableOpacity
      onPress={() => {
        //navigation('Coin', { name: name, symbol: symbol });
      }}>
      <Animated.View style={[style.container, { transform: [{ translateY },] }]}>
        <Card
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            //backgroundColor: 'transparent',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon url={url} />
            <Title name={name} symbol={symbol} />
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={style.text}>
                {price} {currency}{' '}
              </Text>
              {!(changeHour === 0) && <Price changeHour={changeHour} />}
            </View>
          </View>
        </Card>
      </Animated.View>
    </TouchableOpacity>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
const style = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: config.light.fonts.main_font,
  },
  container: {
    height: 100,
    margin: 5
  }
});

export default Coin;
