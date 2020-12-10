import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, Dimensions } from 'react-native';
import Block from './Block';
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


const Test = () => {
    const [isEnabled, toggleSwitch] = useState(false);
    const [state, setState] = useState('RUB');

    const styles = isEnabled ? config.light : config.dark;
    console.log(styles.main_color);
    return (
        <View
            style={{
                backgroundColor: styles.background_color,
                flex: 1,
                opacity: 1,
            }}>
            <Block style={{ backgroundColor: styles.main_color }}>
                <Text style>FUCK YOU</Text>
            </Block>
            <Block style={{ backgroundColor: styles.main_color }}>
                <Text>
                    Dark theme
                </Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
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
                style={{ backgroundColor: '#fafafa', }}
                labelStyle={{
                    fontSize: 16,
                    fontFamily: 'Poppins-Medium',
                }}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={(item) => setState(item.value)}
            />
            <View>
                <Text>Bezier Line Chart</Text>
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
                        backgroundColor: "#e26a00",
                        backgroundGradientFrom: "#fb8c00",
                        backgroundGradientTo: "#ffa726",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "6",
                            strokeWidth: "2",
                            stroke: "#ffa726"
                        }
                    }}
                    bezier
                    style={{
                        marginVertical: 8,
                        borderRadius: 16
                    }}
                />
            </View>
        </View>
    );
};



export default Test;