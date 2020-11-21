import React, {useEffect} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {status} from '../constants/status';
import fetchCoins from '../redux/actions/coins';
import Coin from './Coin';
import Error from './Error';
import Loading from './Loading';

const CoinList = () => {
  const dispatch = useDispatch();
  const status_store = useSelector((state) => state.status);
  const data = useSelector((state) => state.coins);
  console.log('status -> ', status_store);
  //TODO multiple currency
  const value = 'UAH';

  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  if (status_store.status === status.fetching) {
    console.log('Loading');
    return <Loading />;
  } else if (status_store.status === status.error) {
    return <Error error={status_store.error} />;
  } else if (status_store.status === status.success) {
    console.log('Success');
    return (
      <View>
        <ScrollView>
          {data.data.Data.map((item) => {
            return (
              <Coin
                key={item.CoinInfo.Id}
                name={item.CoinInfo.FullName}
                symbol={item.CoinInfo.Name}
                url={item.CoinInfo.ImageUrl}
                changeDay={item.RAW[value].CHANGEDAY.toFixed(2)}
                changeHour={item.RAW[value].CHANGEHOUR.toFixed(2)}
                price={item.RAW[value].PRICE.toFixed(2)}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  } else {
    console.log('IDLE');
    return <></>;
  }
};
export default CoinList;
/*
<FlatList />
  
*/
