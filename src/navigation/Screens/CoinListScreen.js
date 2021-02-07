import React, { useEffect } from 'react';
import { Text, FlatList, View } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import Coin from '../../components/Coin';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import { status } from '../../constants/status';
import fetchCoins from '../../redux/actions/coins';

const CoinListScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const status_store = useSelector((state) => state.status);
  const currency = useSelector(state => state.settings.currency);
  const coins = useSelector((state) => state.coins);
  const count = useSelector(state => state.settings.count);

  useEffect(() => {
    dispatch(fetchCoins(currency, count));
  }, [dispatch]);

  if (status_store.status === status.fetching) {
    console.log('Loading');
    return <Loading />;
  } else if (status_store.status === status.error) {
    return <Error error={status_store.error} />;
  } else if (status_store.status === status.success) {
    console.log('Success');
    return (
      <FlatList
        data={coins.data.Data}
        renderItem={({ item }) => <Coin
          currency={currency}
          navigation={navigation.navigate}
          key={item.CoinInfo.Id}
          name={item.CoinInfo.FullName}
          symbol={item.CoinInfo.Name}
          url={item.CoinInfo.ImageUrl}
          changeDay={item.RAW[currency].CHANGEDAY.toFixed(2)}
          changeHour={item.RAW[currency].CHANGEHOUR.toFixed(2)}
          price={item.RAW[currency].PRICE.toFixed(2)}
        />}
        keyExtractor={(item) => item.CoinInfo.Id}
        extraData={coins}
      />
    );
  } else {
    console.log('IDLE');
    return <></>;
  }
};
export default CoinListScreen;