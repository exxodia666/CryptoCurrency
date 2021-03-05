import React, { useEffect } from 'react';
import { Text, FlatList, View, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FetchCoins } from '../../redux/coins/actions/action_coins';
import Coin from '../../components/Coin';
import Error from '../../components/Error';
import { status } from '../../constants/status'
import Loading from '../../components/Loading';
import { RootState } from '../../redux/main_reducer';
import { PanGestureHandler } from 'react-native-gesture-handler';
//import Animated from 'react-native-reanimated';

const CoinListScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const coins = useSelector((state: RootState) => state.coins);

  useEffect(() => {
    dispatch(FetchCoins());
  }, []);

  if (coins.status === status.error) {
    return <Error error={coins.error.toString()} />;
  }
  if (coins.status === status.fetching) {
    return <Loading />;
  }
  //if (coins.status === status.success) {

  const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

  const y = new Animated.Value(0)
  const onScroll = Animated.event([{
    nativeEvent: { contentOffset: { y } }
  }], {
    useNativeDriver: true
  });


  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      {...{ onScroll }}
      style={{ width: '100%', backgroundColor: 'white' }}
      contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      data={coins.data}
      renderItem={({ item, index }) => (
        <Coin
          y={y}
          currency={item.currency}
          navigation={navigation.navigate}
          index={index}
          name={item.name}
          symbol={item.symbol}
          url={item.url}
          changeDay={item.changeDay}
          changeHour={item.changeHour}
          price={item.price}
        />
      )}
      keyExtractor={(item) => item.key}
    //extraData={coins}
    />
  );
  //}
};
export default CoinListScreen;
