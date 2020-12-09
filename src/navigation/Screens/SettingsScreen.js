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
import Slider from '@react-native-community/slider'
import Coin from '../../components/Coin';
import Icon from 'react-native-vector-icons/MaterialIcons'
import Setting from '../../components/Setting';

//render button after changes
const SettingsScreen = () => {
  const currency = useSelector(state => state.settings.currency);
  const [state, setState] = useState(currency);

  const [language, setLanguage] = useState('ENGLISH');
  const [iconSize, setIconSize] = useState(50);

  const dispatch = useDispatch();

  return (
    <View
      style={{
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        {
          //todo fetch currencies
        }
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
      <Setting setIconSize={setIconSize} iconSize={iconSize} />

      <Button
        title="Save Changes"
        onPress={() => {
          dispatch(saveSettings(state));
          dispatch(fetchCoins(state));
          Alert.alert('Saved!');
        }}
      />
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
{
          //TODO BETTER ALERTS
       /*
      </View>

      <Icon
        name='icons'
        size={35}
      />
      <Text>IconSize: {iconSize}</Text>
      <Slider
        onValueChange={(e) => setIconSize(e)}
        step={1}
        style={{ width: '100%', height: 40, padding: 10 }}
        value={iconSize}
        minimumValue={5}
        maximumValue={20}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#FFFFFF"
      />
      <Text>FontSize: {fontSize}</Text>
      <Slider
        onValueChange={(e) => setFontSize(e)}
        step={1}
        style={{ width: '100%', height: 40, padding: 10 }}
        value={fontSize}
        minimumValue={5}
        maximumValue={20}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#FFFFFF"
      />
      <Text>Dark theme</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        />*/}
{
  //todo fetch currencies
  /*
  */
}

{/*
      <Coin
        iconSize={iconSize}
        currency="USD"
        name='Bitcoin'
        symbol='BTC'
        url='/media/19633/btc.png'
        changeDay={3556}
        changeHour={2}
        price={156657}
      />
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Icon
            name='language'
            size={25}
          />
          <DropDownPicker
            items={[
              {
                label: 'UKRAINIAN',
                value: 'UKRAINIAN',
              },
              {
                label: 'RUSSIAN',
                value: 'RUSSIAN',
              },
              {
                label: 'ENGLISH',
                value: 'ENGLISH',
              },
            ]}
            defaultValue={language}
            containerStyle={{ height: 40 }}
            style={{ backgroundColor: '#fafafa' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            dropDownStyle={{ backgroundColor: '#fafafa' }}
            onChangeItem={(item) => setLanguage(item.value)}
          />
        </View>
      </View>
          */}

