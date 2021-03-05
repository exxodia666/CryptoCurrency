import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
//import AntDesign from 'react-native-vector-icons/AntDesign';

interface Error {
  error: string
}
const Error: React.FC<Error> = ({ error }): JSX.Element => {
  return (
    <View style={style.container}>
      <View style={style.error}>
        <Text style={style.text}>{error.toString()}</Text>
        <TouchableOpacity>
          <SimpleLineIcons
            name="refresh"
            size={30}
            color="black"
            onPress={() => console.log('KEKW')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 10,
    alignItems: 'center'
  },
  error: {
    borderRadius: 7,
    //flex: 1,
    //borderBottomWidth: 0.5,
    padding: 30,
    //elevation: 5,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    padding: 5,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});

export default Error;
