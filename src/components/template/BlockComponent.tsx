import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

interface Block {
    children: JSX.Element
    style: object
}

const Block: React.FC<Block> = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    );
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
