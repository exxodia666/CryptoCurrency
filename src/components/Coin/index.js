import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Block from '../template/BlockComponent'
import Icon from './Icon';
import Title from './Title';
import Price from './Price';
import config from '../../config';
const Coin = ({
  name,
  symbol,
  url,
  changeHour,
  price,
  navigation,
  currency,
}) => {
  const mode_style = config.light;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation('Coin', { name: name, symbol: symbol });
      }}>
      <Block style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
      }}>
        <View style={{
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Icon
            url={url}
          />
          <Title
            name={name}
            symbol={symbol}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={style.text}>{price} {currency} </Text>
            {!(changeHour == 0) && (
              <Price changeHour={changeHour} />
            )}
          </View>
        </View>
      </Block>
    </TouchableOpacity>
  );
};

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
