import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';

interface ICard {
    children: JSX.Element[]
    style: object
}

const Card: React.FC<ICard> = ({ children, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        borderRadius: 5,
        elevation: 5,
        width: Dimensions.get('screen').width * 0.9,
        margin: 10,
        padding: 15,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
});

export default Card;
