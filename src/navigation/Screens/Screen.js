import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';
import saveSettings from '../../redux/actions/settings';

const Screen = () => {
    const settings = useSelector((state) => state.settings);

    const [state, setState] = useState(settings.currency);
    const dispatch = useDispatch();
    return (
        <View>
            <View style={style.header}>
                <Text style={style.text}>Settings</Text>
            </View>
            <DropDownPicker
                items={[
                    {
                        label: 'USD',
                        value: 'USD',
                        hidden: true,
                    },
                    {
                        label: 'RUB',
                        value: 'RUB',
                    },
                    {
                        label: 'UAH',
                        value: 'UAH',
                    },
                ]}
                defaultValue={state}
                containerStyle={{ height: 40, marginBottom: '135%' }}
                style={{ backgroundColor: '#fafafa' }}
                itemStyle={{
                    justifyContent: 'flex-start',
                }}
                dropDownStyle={{ backgroundColor: '#fafafa' }}
                onChangeItem={(item) => setState(item.value)}
            />
            <Button
                title="Save Changes"
                onPress={() => dispatch(saveSettings(state))}
            />
        </View>
    );
};
const style = StyleSheet.create({
    header: {
        padding: 7,
        backgroundColor: 'white',
        borderBottomWidth: 0.5,
    },
    text: {
        marginLeft: 10,
        fontSize: 26,
        fontFamily: 'Poppins-Medium',
    },
});

export default Screen;
