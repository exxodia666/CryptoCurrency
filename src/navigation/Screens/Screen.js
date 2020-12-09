import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import saveSettings from '../../redux/actions/settings';

const Screen = () => {
    return (
        <View>

        </View>
    );
};
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

export default Screen;
