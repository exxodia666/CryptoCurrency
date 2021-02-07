import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import config from '../../config';

const Title = ({ name, symbol }) => {
    const mode_style = config.light;
    return (
        <View>
            <Text style={{ ...style.text, fontSize: config.light.fonts.large_font_size, color: mode_style.colors.font_color }}>{name}</Text>
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
        fontSize: config.light.fonts.default_font_size,
        fontFamily: config.light.fonts.main_font,
    },
});

export default Title;
