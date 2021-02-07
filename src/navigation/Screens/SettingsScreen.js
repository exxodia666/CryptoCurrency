import React from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {useDispatch, useSelector} from 'react-redux';
import fetchCoins from '../../redux/actions/coins';
import saveSettings from '../../redux/actions/settings';
import config from '../../config';
import currencies from '../../constants/currencies';
import count from '../../constants/count';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const prev_currency = useSelector((state) => state.settings.currency);
  const prev_count = useSelector((state) => state.settings.count);
  const currenciesArray = currencies.map((item) => {
    if (item.value === prev_currency) {
      return {...item, disabled: true};
    } else return item;
  });
  const countArray = count.map((item) => {
    if (item.value === prev_count) {
      return {...item, disabled: true};
    } else return item;
  });
  return (
    <View style={style.container}>
      <View>
        <DropDownPicker
          items={currenciesArray}
          defaultValue={prev_currency}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          labelStyle={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
          }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => {
            dispatch(saveSettings({currency: item.value, count: prev_count}));
            dispatch(fetchCoins(item.value, prev_count));
          }}
        />
        <DropDownPicker
          items={countArray}
          defaultValue={prev_count}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          labelStyle={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
          }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => {
            dispatch(
              saveSettings({currency: prev_currency, count: item.value}),
            );
            dispatch(fetchCoins(prev_currency, item.value));
          }}
        />
      </View>
    </View>
  );
};
const style = StyleSheet.create({
  text: {
    marginLeft: 10,
    fontSize: config.light.fonts.default_font_size,
    fontFamily: config.light.fonts.main_font,
  },
});

export default SettingsScreen;
