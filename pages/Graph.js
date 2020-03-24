import React, { Component } from 'react';
//import React
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
//import Basic React Native Components

import {
  LineChart,
  BarChart
 
} from 'react-native-chart-kit';
//import React Native chart Kit for different kind of Chart
export default class Graph extends Component {
    render() {
        return (
           <ScrollView>
               <View>
                   <View>
                   <LineChart
                        data={{
                            labels: [
                                'Jan',
                                'Feb',
                                'Mar',
                                'Apr',
                                'May',
                                'Jun',
                                ],
                            datasets: [
                            {
                                data: [20, 45, 28, 80, 10, 43],
                                strokeWidth: 2,
                            },
                            ],
                        }}
                        width={Dimensions.get('window').width - 16}
                        height={220}
                        chartConfig={{
                            backgroundColor: '#1cc910',
                            backgroundGradientFrom: '#eff3ff',
                            backgroundGradientTo: '#efefef',
                            decimalPlaces: 2,
                            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            style: {
                            borderRadius: 15,
                            },
                        }}
                        style={{
                            marginVertical: 8,
                            borderRadius: 16,
                        }}
                        />
                   </View>
                   <View>
                   <BarChart
                    data={{
                        labels: [
                        'Jan',
                        'Feb',
                        'Mar',
                        'Apr',
                        'May',
                        'Jun',
                        ],
                        datasets: [
                        {
                            data: [20, 45, 28, 80, 99, 43],
                        },
                        ],
                    }}
                    width={Dimensions.get('window').width - 16}
                    height={220}
                    //yAxisLabel={'Rs'}
                    chartConfig={{
                        backgroundColor: '#1cc910',
                        backgroundGradientFrom: '#eff3ff',
                        backgroundGradientTo: '#efefef',
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    />
                   </View>
               </View>
           </ScrollView>
        )
    }
}
