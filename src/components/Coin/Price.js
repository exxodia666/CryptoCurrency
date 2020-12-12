import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const Price = ({ changeHour, }) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'center',
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
            />
        </View>
    );
};
Price.proptypes = {
    children: PropTypes.component
};

const style = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
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
