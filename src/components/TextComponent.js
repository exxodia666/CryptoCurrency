import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

const TextComponent = ({ children, style }) => {
    return (
        <Text style={{ ...style, ...styles.text }}>
            {children}
        </Text>
    );
};
TextComponent.proptypes = {
    children: PropTypes.component
};

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
    }
});

export default TextComponent;
