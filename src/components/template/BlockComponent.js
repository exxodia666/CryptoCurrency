import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const Block = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    );
};

Block.proptypes = {
    children: PropTypes.component
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 0.5,
    }
});

export default Block;
