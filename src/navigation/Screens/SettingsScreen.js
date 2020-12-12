import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import fetchCoins from '../../redux/actions/coins';
import saveSettings from '../../redux/actions/settings';
import Block from '../../components/Block';
import { TouchableOpacity } from 'react-native-gesture-handler';
import config from '../../config';

//render button after changes
const SettingsScreen = () => {
  const isHermes = () => !!global.HermesInternal;
  const dispatch = useDispatch();
  const prev_currency = useSelector(state => state.settings.currency);
  const prev_darkMode = useSelector(state => state.settings.darkMode);
  const [currency, setCurrency] = useState(prev_currency);
  const [darkMode, setDarkMode] = useState(prev_darkMode);

  const [changed, setChanged] = useState(true);
  /*
    const prevModeRef = useRef();
    const prevCurrencyRef = useRef();
  
    useEffect(() => {
      prevModeRef.current = darkMode;
      prevCurrencyRef.current = currency;
    });
  
    const prevMode = prevModeRef.current;
    const prevCurrency = prevCurrencyRef.current;
  
    useEffect(() => {
      console.log(darkMode, prevMode);
      if (prevMode !== undefined && prevCurrency !== undefined) {
        if (prevCurrency === currency && prevMode === darkMode) {
          setChanged(false);
        } else {
          setChanged(true);
        }
      }
    });
  */


  return (
    <View style={style.container}>
      <View>
        <Block>
          <Text style={style.text}>Mode: {darkMode.toString()}</Text>
          <Text style={style.text}>Hermes: {isHermes().toString()}</Text>
        </Block>
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
          defaultValue={currency}
          containerStyle={{ height: 40 }}
          style={{ backgroundColor: '#fafafa', }}
          labelStyle={{
            fontSize: 16,
            fontFamily: 'Poppins-Medium',
          }}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          dropDownStyle={{ backgroundColor: '#fafafa' }}
          onChangeItem={(item) => setCurrency(item.value)}
        />
        <Block style={style.block}>
          <Text style={style.text}>Dark theme</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={darkMode ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={setDarkMode}
            value={darkMode}
          />
        </Block>
      </View>
      <View style={{ alignItems: "center" }}>
        {changed &&
          <TouchableOpacity
            style={style.button}
            onPress={() => {
              dispatch(saveSettings({ darkMode: darkMode, currency: currency }));
              dispatch(fetchCoins(currency));
              Alert.alert('Saved!');
            }}>
            <Text style={style.buttonText}>
              Save Changes
          </Text>
          </TouchableOpacity>
        }
      </View>
    </View >
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
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    fontFamily: 'Poppins-Medium',
    color: 'white',
    width: '100%',
  },
  button: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    backgroundColor: 'purple',
    width: '100%'
  },
  container: {
    height: '100%',
    justifyContent: "space-between",
  },
  block: {
    justifyContent: 'space-between',
  },
  header: {
    padding: 7,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
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
      */}
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
{/*
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
        {
          //TODO BETTER ALERTS
        }
      </View>
      <Coin
        currency="USD"
        //navigation={navigation.navigate}
        //key={item.CoinInfo.Id}
        name='Bitcoin'
        symbol='BTC'
        url='/media/19633/btc.png'
        changeDay={3556}
        changeHour={2}
        price={156657}
      />
      <Icon
        name='icons'
        size = {35}
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
      />
      */}
