import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { useSelector } from 'react-redux';
import config from '../config'

const GradientComponent = ({ children }) => {
    const modes = useSelector(state => state.settings.darkMode);
    const mode_style = !modes ? config.light : config.dark;
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            colors={mode_style.colors.gradient}
            style={styles.background}>
            {children}
        </LinearGradient>
    );
};

GradientComponent.proptypes = {
    children: PropTypes.component
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    }
});

export default GradientComponent;
