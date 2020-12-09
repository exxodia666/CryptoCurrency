import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Block = ({ children }) => {
    console.log(children);
    return (
        <View style={style.container}>
            {children}
        </View>
    );
};

Block.proptypes = {
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: 'white',
        borderWidth: 0.5,
    }
});

export default Block;
