import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Coin = ({
  id,
  name,
  symbol,
  url,
  changeDay,
  changeHour,
  price,
  price_symbol,
}) => {
  console.log(symbol + '-> ' + price);
  return (
    <View style={style.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          style={style.image}
          source={{
            uri: `https://www.cryptocompare.com${url}`,
          }}
        />
        <View>
          <Text style={{...style.text, fontSize: 18}}>{name}</Text>
          <Text style={{...style.text, color: 'grey'}}>{symbol}</Text>
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
      <View style={{alignItems: 'flex-end'}}>
        <Text style={style.text}>${price}</Text>
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
      </View>
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
    borderBottomWidth: 0.5,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins-Medium',
  },
});

export default Coin;
