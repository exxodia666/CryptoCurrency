import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';
import Block from '../components/template/BlockComponent';
import DropDownPicker from 'react-native-dropdown-picker';
import { LineChart } from 'react-native-chart-kit';
//render button after changes
//TODO ADVANSED SETTINGS
//LOCALISATION 
//REFACTOR
//EXTREME Optimisation
//LAST COINS WHEN NO INTERNET
//BETTER NAVIGATION ROUTES AND URLS
//CONFIG FILE
import config from '../config'
import TextComponent from '../components/template/TextComponent';
import LinearGradient from 'react-native-linear-gradient';


const Test = () => {
    const [isEnabled, toggleSwitch] = useState(false);
    const [state, setState] = useState('RUB');
    const styles = !isEnabled ? config.light : config.dark;
    return (
        <LinearGradient
            colors={[...styles.colors.gradient]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={{
                flex: 1,
                opacity: 1,
            }}
        >
            <Block style={{ borderColor: styles.colors.main_color }}>
                <TextComponent style={{ color: styles.colors.font_color }}>FUCK YOU</TextComponent>
            </Block>
            <Block style={{ borderColor: styles.main_color, justifyContent: 'space-between' }}>
                <TextComponent style={{ color: styles.colors.font_color }}>
                    Dark theme
                </TextComponent>
                <Switch
                    trackColor={{ false: 'fa3580', true: 'FA3580' }}
                    thumbColor={isEnabled ? styles.colors.main_color : 'grey'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </Block>
            <DropDownPicker
                items={[
                    {
                        label: 'RUB',
                        value: 'RUB',
                    },
                    {
                        label: 'UAH',
                        value: 'UAH',
                    },
                    {
                        label: 'USD',
                        value: 'USD',
                    },
                ]}
                defaultValue={state}
                containerStyle={{ height: 40 }}
                style={{
                    // marginBottom: 50,
                    borderColor: styles.colors.main_color,
                    backgroundColor: 'transparent',
                }}
                labelStyle={{
                    color: styles.colors.font_color,
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                }}
                itemStyle={{
                    //borderBottomWidth: 1,
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={{
                    borderColor: styles.colors.main_color,
                    backgroundColor: 'transparent',
                }}
                onChangeItem={(item) => setState(item.value)}
            />
            <View style={{ marginTop: 150 }}>
                <LineChart
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June"],
                        datasets: [
                            {
                                data: [
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100,
                                    Math.random() * 100
                                ]
                            }
                        ]
                    }}
                    width={Dimensions.get("window").width * 0.9} // from react-native
                    height={220}
                    yAxisLabel="$"
                    yAxisSuffix="k"
                    yAxisInterval={1} // optional, defaults to 1
                    chartConfig={{
                        //backgroundColor: "#2d333a",
                        backgroundGradientFrom: styles.colors.plot_gradient[0],
                        backgroundGradientTo: styles.colors.plot_gradient[1],
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => styles.colors.main_color,
                        labelColor: (opacity = 1) => styles.colors.font_color,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            color: 'fa3580',
                            r: "4",
                            strokeWidth: "2",
                            stroke: styles.colors.main_color
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </LinearGradient >
    );
};



export default Test;