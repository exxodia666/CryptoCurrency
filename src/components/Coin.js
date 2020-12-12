import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Block from './Block'
//import Icon from 'react-native-vector-icons/Fontisto';
import Icon from './Coin/Icon';
import Title from './Coin/Title';
import Price from './Coin/Price';
import config from '../config';
import { useSelector } from 'react-redux';

const Coin = ({
  name,
  symbol,
  url,
  changeHour,
  price,
  navigation,
  currency,
}) => {
  const modes = useSelector(state => state.settings.darkMode);
  const mode_style = !modes ? config.light : config.dark;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation('Coin', { name: name, symbol: symbol });
      }}>
      <Block style={{
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'transparent',
        justifyContent: "center",
        borderBottomWidth: 0.5,
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

Coin.proptypes = {
  id: PropTypes.number,
  price: PropTypes.number,
  price_symbol: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
  symbol: PropTypes.string,
  changeDay: PropTypes.number,
  changeHour: PropTypes.number,
  navigation: PropTypes.func,
};

const style = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
  container: {
    backgroundColor: 'transparent',
    // borderBottomWidth: 0.3,
  },
});

export default Coin;
