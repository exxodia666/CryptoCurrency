import React, {useEffect} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {status} from '../../constants/status';
import fetchDailyCoins from '../../redux/actions/daily_coins';
import Loading from '../../components/Loading';
import days from '../../constants/days';
import {AreaChart} from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import config from '../../config';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
const CoinScreen = ({route}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDailyCoins(currency, route.params.symbol));
  }, [dispatch]);

  const daily_status = useSelector((state) => state.daily_coins_status.status);
  const currency = useSelector((state) => state.settings.currency);
  const data = useSelector((state) => state.daily_coins);
  if (daily_status === status.error) {
    return <></>;
  } else if (daily_status === status.fetching) {
    return <Loading />;
  } else if (daily_status === status.success) {
    const high = data.data.Data.Data.map((item) => item.high);
    const low = data.data.Data.Data.map((item) => item.low);
    // const labels = data.data.Data.Data.map(
    //   (item) => days[new Date(item.time * 1000).getDay()],
    // );
    // const plot = [
    //   {
    //     data: high,
    //   },
    //   {
    //     data: low,
    //   },
    // ];
    return (
      <View>
        <Text>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    );
  } else {
    return <></>;
  }
};

var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
export default CoinScreen;
