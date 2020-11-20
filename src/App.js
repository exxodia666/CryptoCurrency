import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import CoinList from './components/CoinList';
import Loading from './components/Loading';
import store from './redux/Store';

const App = () => {
  const isHermes = () => !!global.HermesInternal;
  return (
    <Provider store={store}>
      {/* <Text>Hermes Engine: {isHermes().toString()}</Text>*/}
      <CoinList />
    </Provider>
  );
};
export default App;
/*
  <Image
    source={{
      uri: `https://www.cryptocompare.com${item.CoinInfo.ImageUrl}`,
    }}
    style={{width: 50, height: 50}}
  />
  <Text>{item.CoinInfo.FullName}</Text> 
*/
