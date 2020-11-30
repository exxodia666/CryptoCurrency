import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  Picker,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import saveSettings from '../../redux/actions/settings';

const SettingsScreen = () => {
  const settings = useSelector((state) => state.settings);
  //const [selectedValue, setSelectedValue] = useState('java');
  useEffect(() => {
    console.log('RENDER SETTINGS');
  });
  const [state, setState] = useState(settings.currency);
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
              label: 'USD',
              value: 'USD',
             
            },
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
            {
              label: 'USD',
              value: 'USD',
     
            },
            {
              label: 'USD',
              value: 'USD',
             
            },
            {
              label: 'USD',
              value: 'USD',
             
            },
            {
              label: 'USD',
              value: 'USD',
              
            },
            {
              label: 'USD',
              value: 'USD',
             
            },
          ]}
          defaultValue={state}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#fafafa'}}
          itemStyle={{
            justifyContent: 'flex-start',
          }}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          dropDownStyle={{backgroundColor: '#fafafa'}}
          onChangeItem={(item) => setState(item.value)}
        />
        
      </View>
      <Button
        title="Save Changes"
        onPress={() => dispatch(saveSettings(state))}
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
