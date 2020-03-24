import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import {getDistance} from 'geolib';

export default class CalculateD extends Component {
  _getDistance = () => {
    var dis = getDistance(
      { latitude: 8.514477, longitude: 39.269257 },
      { latitude: 9.005401, longitude: 38.763611 }
    );
    alert(`Distance\n${dis} Meter\nor\n${dis / 1000} KM`);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.body}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.header}>
                Calculate Distance Between Two Locations
              </Text>
              <Text style={styles.textStyle}>
                Distance between{'\n'}adama and AA 
              </Text>
              <TouchableHighlight
                style={styles.buttonStyle}
                onPress={() => {
                  this._getDistance();
                }}>
                <Text>Get Distance</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dddddd',
    margin: 10,
  },
});

 