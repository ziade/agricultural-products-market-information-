/*Screen to register the user*/
import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'ProductDatabase.db' });
export default class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }
  Add_product = () => {
    var that = this;
    const { name } = this.state;
    const { specification } = this.state;
    const { quantity } = this.state;
    const { unit } = this.state;
    const { region } = this.state;
    const { zone } = this.state;
    const { woreda } = this.state;
    const { city } = this.state;
    const { location } = this.state;
    const { priceMin } = this.state;
    const { priceMax } = this.state;
    if (name) {
      db.transaction(function(tx) {
        tx.executeSql(
          'INSERT INTO table_product (name, specification, quantity, unit, region, zone, woreda, city, location, priceMin, priceMax) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
          [name, specification, quantity,unit,region,zone,woreda,city,location,priceMin,priceMax],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
            if (results.rowsAffected > 0) {
              Alert.alert(
                'Success',
                'You add new product Successfully',
                [
                  {
                    text: 'Ok',
                    onPress: () =>
                      that.props.navigation.navigate('ProductPage'),
                  },
                ],
                { cancelable: false }
              );
            } else {
              alert('Add product Failed');
            }
          }
        );
      });
    } else {
      alert('Please fill name');
    }
     
  };
  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView
            behavior="padding"
            style={{ flex: 1, justifyContent: 'space-between' }}>
            <Mytextinput
              placeholder="Enter Name"
              onChangeText={name => this.setState({ name })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter specification"
              onChangeText={specification => this.setState({ specification })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter quantity"
              onChangeText={quantity => this.setState({ quantity })}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mytextinput
              placeholder="Enter Unit"
              onChangeText={unit => this.setState({ unit })}
              style={{ padding:10 }}
            />
           
            <Mytextinput
              placeholder="Enter region"
              onChangeText={region => this.setState({ region })}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
             <Mytextinput
              placeholder="Enter zone"
              onChangeText={zone => this.setState({ zone })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter woreda"
              onChangeText={woreda => this.setState({ woreda })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter city"
              onChangeText={city => this.setState({ city })}
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter location"
              onChangeText={location => this.setState({ location })}
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mytextinput
              placeholder="Enter PriceMin"
              onChangeText={priceMin => this.setState({ priceMin })}
              keyboardType="numeric"
              style={{ padding:10 }}
            />
            <Mytextinput
              placeholder="Enter PriceMax"
              onChangeText={priceMax => this.setState({ priceMax })}
              keyboardType="numeric"
              style={{ textAlignVertical: 'top',padding:10 }}
            />
            <Mybutton
              title="Submit"
              customClick={this.Add_product.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}