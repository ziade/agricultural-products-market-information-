/*Screen to view single user*/
import React from 'react';
import { Text, View, Button } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'ProductDatabase.db' });
export default class ViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_product_id: '',
      name: '',
      specification: '',
      quantity: '',
      unit: '',
      region: '',
      zone: '',
      woreda: '',
      city: '',
      location: '',
      priceMin: '',
      priceMax: '',
      userData: '',
    };
  }
  searchUser = () => {
    const { input_product_id } = this.state;
    console.log(this.state.input_product_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_product where product_id = ?',
        [input_product_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            this.setState({
              userData: results.rows.item(0),
            });
          } else {
            alert('No product found');
            this.setState({
              userData: '',
            });
          }
        }
      );
    });
  };
  render() {
    return (
      <View>
        <Mytextinput
          placeholder="Enter product Id"
          onChangeText={input_product_id => this.setState({ input_product_id })}
          style={{ padding:10 }}
        />
        <Mybutton
          title="Search product"
          customClick={this.searchUser.bind(this)}
        />
        <View style={{ marginLeft: 35, marginRight: 35, marginTop: 10 }}>
          <Text>Id: {this.state.userData.product_id}</Text>
          <Text>Name: {this.state.userData.name}</Text>
          <Text>specification: {this.state.userData.specification}</Text>
          <Text>quantity: {this.state.userData.quantity}</Text>
          <Text>unit: {this.state.userData.unit}</Text>
          <Text>region: {this.state.userData.region}</Text>
          <Text>zone: {this.state.userData.zone}</Text>
          <Text>woreda: {this.state.userData.woreda}</Text>
          <Text>city: {this.state.userData.city}</Text>
          <Text>location: {this.state.userData.location}</Text>
          <Text>priceMin: {this.state.userData.priceMin}</Text>
          <Text>priceMin: {this.state.userData.priceMax}</Text>
        </View>
      </View>
    );
  }
}