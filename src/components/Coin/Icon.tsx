import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

interface Icon {
    url: string
}

const Icon: React.FC<Icon> = ({ url }) => {
    return (
        <Image
            style={styles.icon}
            source={{
                uri: `https://www.cryptocompare.com${url}`,
            }}
        />
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 50,
        height: 50,
    }
});
export default Icon;