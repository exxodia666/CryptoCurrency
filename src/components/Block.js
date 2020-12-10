import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Block = ({ children, style }) => {
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
        //backgroundColor: 'white',
        padding: 5,
        flexDirection: "row",
        borderWidth: 0.5,
    }
});

export default Block;
