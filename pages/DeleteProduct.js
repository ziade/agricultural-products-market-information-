/*Screen to delete the user*/
import React from 'react';
import { Button, Text, View, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'ProductDatabase.db' });
export default class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input_product_id: '',
    };
  }
  deleteProduct = () => {
    var that = this;
    const { input_product_id } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_product where product_id=?',
        [input_product_id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'product deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('ProductPage'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid product Id');
          }
        }
      );
    });
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Mytextinput
          placeholder="Enter poduct Id"
          onChangeText={input_product_id => this.setState({ input_product_id })}
          style={{ padding:10 }}
        />
        <Mybutton
          title="Delete product"
          customClick={this.deleteProduct.bind(this)}
        />
      </View>
    );
  }
}