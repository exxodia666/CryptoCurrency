import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

const Setting = () => {
    const [iconSize, setIconSize] = useState(12);
    return (
        <View style={style.container}>
            {/*
            <Icon
                name='icons'
                size={35}
            />*/}
            {//<Text style={style.text}>IconSize: {iconSize}</Text>
            }
            <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                <Icon
                    name='icons'
                    size={25}
                />
                <Slider
                    onValueChange={(e) => setIconSize(e)}
                    step={1}
                    style={{ width: '80%', height: 40, padding: 10, borderWidth: 0.5 }}
                    value={iconSize}
                    minimumValue={5}
                    maximumValue={20}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#FFFFFF"
                />
                <Icon
                    name='icons'
                    size={30}
                />
            </View>
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
    container: {
        padding: 7,
        backgroundColor: 'white',
        borderBottomWidth: 0.4,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
    },
});

export default Setting;
