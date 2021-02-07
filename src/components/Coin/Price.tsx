import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../config';


interface Price {
    changeHour: number
}


const Price: React.FC<Price> = ({ changeHour, }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
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
                            : ''
                }
                size={20}
                color={
                    changeHour > 0 ? 'green' : changeHour == 0 ? 'black' : 'red'
                }
            />
        </View>
    );
};

const style = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: config.light.fonts.default_font_size,
        fontFamily: config.light.fonts.main_font,
    },
    greenText: {
        color: 'black',
    },
    greenText: {
        color: 'green',
    },
    redText: {
        color: 'red',
    },
});

export default Price;
