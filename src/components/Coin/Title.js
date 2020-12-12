import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import config from '../../config';

const Title = ({ name, symbol }) => {

    const modes = useSelector(state => state.settings.darkMode);
    const mode_style = !modes ? config.light : config.dark;
    return (
        <View>
            <Text style={{ ...style.text, fontSize: 18, color: mode_style.colors.font_color }}>{name}</Text>
            <Text style={{ ...style.text, color: 'grey' }}>{symbol}</Text>
        </View>
    );
};
Title.proptypes = {
    children: PropTypes.component
};

const style = StyleSheet.create({
    text: {
        marginLeft: 10,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
    },
});

export default Title;
