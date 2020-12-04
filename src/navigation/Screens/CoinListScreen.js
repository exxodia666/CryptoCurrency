import React, { useEffect } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
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
  const data = useSelector((state) => state.coins);
  //TODO multiple currency
  useEffect(() => {
    dispatch(fetchCoins(currency));
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
        {//todo FlatList
        }
        <ScrollView>
          {data.data.Data.map((item) => {
            console.log(item);
            return (
              <Coin
                currency={currency}
                navigation={navigation.navigate}
                key={item.CoinInfo.Id}
                name={item.CoinInfo.FullName}
                symbol={item.CoinInfo.Name}
                url={item.CoinInfo.ImageUrl}
                changeDay={item.RAW[currency].CHANGEDAY.toFixed(2)}
                changeHour={item.RAW[currency].CHANGEHOUR.toFixed(2)}
                price={item.RAW[currency].PRICE.toFixed(2)}
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
export default CoinListScreen;
