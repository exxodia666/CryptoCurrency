import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import config from '../config';

const Block = ({ children, style }) => {
    const modes = useSelector(state => state.settings);
    const mode_style = !modes ? config.light : config.dark;
    return (
        <View style={{ ...style, ...styles.container }}>
            {children}
        </View>
    );
};

Block.proptypes = {
    children: PropTypes.component
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "row",
        //borderBottomWidth: 0.8,
    }
});

export default Block;
