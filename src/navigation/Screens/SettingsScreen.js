import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import fetchCoins from '../../redux/actions/coins';
import saveSettings from '../../redux/actions/settings';

const SettingsScreen = () => {
  const currency = useSelector(state => state.settings.currency);
  /*
  useEffect(() => {
    console.log('RENDER SETTINGS');
  });
  */
  const [state, setState] = useState(currency);
  const dispatch = useDispatch();

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        <DropDownPicker
          items={[
            {
              label: 'RUB',
              value: 'RUB',
            },
            {
              label: 'UAH',
              value: 'UAH',
            },
            {
              label: 'USD',
              value: 'USD',
            },
          ]}
          defaultValue={state}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#fafafa' }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => setState(item.value)}
        />
        {
          //TODO BETTER ALERTS
        }
      </View>
      <Button
        title="Save Changes"
        onPress={() => {
          dispatch(saveSettings(state));
          dispatch(fetchCoins(state));
          Alert.alert('Saved!');
        }}
      />
      {/*
      <Picker
        selectedValue={selectedValue}
        style={{height: 50, width: 150}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>

      {/**/}
    </View>
  );
};
/*
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
*/
const style = StyleSheet.create({
  header: {
    padding: 7,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
  },
  text: {
    marginLeft: 10,
    fontSize: 26,
    fontFamily: 'Poppins-Medium',
  },
});

export default SettingsScreen;
