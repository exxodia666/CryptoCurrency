import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';

const Icon = ({ url }) => {
    return (
        <Image
            style={styles.icon}
            source={{
                uri: `https://www.cryptocompare.com${url}`,
            }}
        />
    );
};
Icon.proptypes = {
    children: PropTypes.component
};
const styles = StyleSheet.create({
    
    icon: {
        width: 50,
        height: 50,
    }
});
export default Icon;