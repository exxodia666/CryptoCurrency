import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedbackComponent,
  TouchableOpacity,
  View,
} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Error = ({error}) => {
  return (
    <View style={style.container}>
      <View style={style.error}>
        <AntDesign name="exception1" size={230} color="red" />
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

Error.proptypes = {
  //changeHour: PropTypes.number,
};

const style = StyleSheet.create({
  container: {paddingTop: 10, alignItems: 'center'},
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
