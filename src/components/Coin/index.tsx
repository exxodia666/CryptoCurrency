import React, { useState } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Block from '../template/BlockComponent';
import Icon from './Icon';
import Title from './Title';
import Price from './Price';
import config from '../../config';
import { LinearGradient } from 'react-native-svg';

interface Coin {
  name: string
  symbol: string
  url: string
  changeHour: number
  price: number
  navigation: any
  currency: string
}

const Coin: React.FC<Coin> = ({ name, symbol, url, changeHour, price, navigation, currency }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation('Coin', { name: name, symbol: symbol });
      }}>
      <Block
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'transparent',
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
      </Block>
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
    backgroundColor: 'transparent',
  },
});

export default Coin;
