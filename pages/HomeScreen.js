/*Home Screen With buttons to navigate to different options*/
import React from 'react';
import { View } from 'react-native';
import Mybutton from './components/Mybutton';
import Mytext from './components/Mytext';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'ProductDatabase.db' });
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          flexDirection: 'column',
          marginTop: 30,
        }}>
        
        <Mybutton
          title="Product Page"
          customClick={() => this.props.navigation.navigate('ProductPage')}
        />

      </View>
    );
  }
}