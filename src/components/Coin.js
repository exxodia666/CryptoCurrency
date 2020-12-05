import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
const Coin = ({
  name,
  symbol,
  url,
  changeHour,
  price,
  navigation,
  currency
}) => {
  return (
    <View
      style={style.container}>
      <TouchableOpacity
        onPress={() => {
          navigation('Coin', { name: name, symbol: symbol });
        }}>
        <View
          style={{
            padding: 6,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Image
              style={style.image}
              source={{
                uri: `https://www.cryptocompare.com${url}`,
              }}
            />
            <View>
              <Text style={{ ...style.text, fontSize: 18 }}>{name}</Text>
              <Text style={{ ...style.text, color: 'grey' }}>{symbol}</Text>
            </View>
          </View>
          {/*
      <Text
        style={{
          ...(changeDay > 0
            ? style.greenText
            : changeDay == 0
            ? style.grey
            : style.greenText),
          ...style.text,
        }}>
        {changeDay > 0
          ? '+' + changeDay
          : changeDay == 0
          ? Math.abs(changeDay)
          : changeDay}
        </Text>*/}
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={style.text}>{price} {currency} </Text>
            {!(changeHour == 0) && (
              <View
                style={{
                  flexDirection: 'row',
                  //justifyContent: 'center',
                  alignItems: 'center',
                  // borderWidth: 0.5,
                }}>
                <Text
                  style={{
                    ...(changeHour > 0
                      ? style.greenText
                      : changeHour == 0
                        ? style.grey
                        : style.redText),
                    ...style.text,
                  }}>
                  {changeHour > 0
                    ? '+' + changeHour
                    : changeHour == 0
                      ? Math.abs(changeHour)
                      : changeHour}
                </Text>
                <Ionicons
                  name={
                    changeHour > 0
                      ? 'arrow-up'
                      : changeHour < 0
                        ? 'arrow-down'
                        : true
                  }
                  size={20}
                  color={
                    changeHour > 0 ? 'green' : changeHour == 0 ? 'black' : 'red'
                  }
                //style={{borderWidth: 0.5, alignContent: 'center'}}
                />
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
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
  greenText: {
    color: 'black',
  },
  greenText: {
    color: 'green',
  },
  redText: {
    color: 'red',
  },
  image: {
    borderRightWidth: 0.5,
    width: 50,
    height: 50,
  },
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 0.4,
    //flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default Coin;
