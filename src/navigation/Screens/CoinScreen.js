import React, { useEffect } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useDispatch, useSelector } from 'react-redux';
import { status } from '../../constants/status';
import fetchDailyCoins from '../../redux/actions/daily_coins';
import Loading from '../../components/Loading';
import GradientComponent from '../../components/GradientComponent';
//REFACTOR
const CoinScreen = ({ navigation, route }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDailyCoins(currency, route.params.symbol));
  }, [dispatch]);

  const daily_status = useSelector(state => state.daily_coins_status.status);
  const currency = useSelector(state => state.settings.currency);
  const data = useSelector(state => state.daily_coins);

  //remove to constants
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thi', 'Fri', 'Sat'];
  if (daily_status === status.error) {
    return <></>
  } else if (daily_status === status.fetching) {
    return <Loading />
  } else if (daily_status === status.success) {
    const high = data.data.Data.Data.map((item) => item.high);
    const low = data.data.Data.Data.map((item) => item.low);
    const labels = data.data.Data.Data.map((item) => day[new Date(item.time * 1000).getDay()]);
    return (
      <LineChart
        data={{
          labels: labels,
          datasets: [{ data: high }, { data: low }],
        }}
        width={Dimensions.get('window').width} // from react-native
        height={Dimensions.get('window').height}
        //yAxisLabel={currency}
        //yAxisSuffix={currency}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '4',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          //marginVertical: 10,
          //borderRadius: 16,
        }}
      />
    );
  } else {
    return <></>
  }

};
export default CoinScreen;
