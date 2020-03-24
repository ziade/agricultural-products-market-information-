/*Screen to update the user*/
import React from 'react';
import { View, YellowBox, ScrollView, KeyboardAvoidingView, Alert, } from 'react-native';
import Mytextinput from './components/Mytextinput';
import Mybutton from './components/Mybutton';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'ProductDatabase.db' });

export default class UpdateProduct extends React.Component {
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
    };
  }
  searchProduct = () => {
    const {input_product_id} =this.state;
    console.log(this.state.input_product_id);
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_product where product_id = ?',
        [input_product_id],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len',len);
          if (len > 0) {
            console.log(results.rows.item(0).name);
            this.setState({
             name:results.rows.item(0).name,
            });
            this.setState({
             specification:results.rows.item(0).specification,
            });
            this.setState({
             quantity:results.rows.item(0).quantity,
            });
            this.setState({
              unit:results.rows.item(0).unit,
             });
             this.setState({
              region:results.rows.item(0).region,
             });
             this.setState({
              zone:results.rows.item(0).zone,
             });
             this.setState({
              woreda:results.rows.item(0).woreda,
             });
             this.setState({
              city:results.rows.item(0).city,
             });
             this.setState({
              location:results.rows.item(0).location,
             });
             this.setState({
              priceMin:results.rows.item(0).priceMin,
             });
             this.setState({
              priceMax:results.rows.item(0).priceMax,
             });
          }else{
            alert('No product found');
            this.setState({
              name:'',
              specification:'',
              quantity:'',
              unit:'',
              region: '',
              zone: '',
              woreda: '',
              city: '',
              location: '',
              priceMin: '',
              priceMax: '',
            });
          }
        }
      );
    });
  };
  UpdateProducts = () => {
    var that=this;
    const { input_product_id } = this.state;
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
    if (name){
      db.transaction((tx)=> {
        tx.executeSql(
          'UPDATE table_product set name=?, specification=? , quantity=?, unit=?, region=?, zone=?, woreda=?, city=?, location=?, priceMin=?, priceMax=? where product_id=?',
          [name, specification, quantity,unit,region,zone,woreda,city,location,priceMin,priceMax,input_product_id],
          (tx, results) => {
            console.log('Results',results.rowsAffected);
            if(results.rowsAffected>0){
              Alert.alert( 'Success', 'product updated successfully',
                [
                  {text: 'Ok', onPress: () => that.props.navigation.navigate('ProductPage')},
                ],
                { cancelable: false }
              );
            }else{
              alert('Updation Failed');
            }
          }
        );
      });
    }else{
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
              placeholder="Enter product Id"
              style={{ padding:10 }}
              onChangeText={input_product_id => this.setState({ input_product_id })}
            />
            <Mybutton
              title="Search product"
              customClick={this.searchProduct.bind(this)}
            />
            <Mytextinput
              placeholder="Enter Name"
              value={this.state.name}
              style={{ padding:10 }}
              onChangeText={name => this.setState({ name })}
            />
            <Mytextinput
              placeholder="Enter specification"
              value={this.state.specification}
              onChangeText={specification => this.setState({ specification })}
              style={{ padding:10 }}
            />
             <Mytextinput
              placeholder="Enter quantity"
              value={this.state.quantity}
              onChangeText={quantity => this.setState({ quantity })}
              style={{ padding:10 }}
            />
             <Mytextinput
              placeholder="Enter unit"
              value={this.state.unit}
              onChangeText={unit => this.setState({ unit })}
              style={{ padding:10 }}
            />
             <Mytextinput
              placeholder="Enter region"
              value={this.state.region}
              onChangeText={region => this.setState({ region })}
              style={{ padding:10 }}
            />
             <Mytextinput
              placeholder="Enter zone"
              value={this.state.zone}
              onChangeText={zone => this.setState({ zone })}
              style={{ padding:10 }}
            />
             <Mytextinput
              placeholder="Enter woreda"
              value={this.state.woreda}
              onChangeText={woreda => this.setState({ woreda })}
              style={{ padding:10 }}
            />
             <Mytextinput
              placeholder="Enter city"
              value={this.state.city}
              onChangeText={city => this.setState({ city })}
              style={{ padding:10 }}
            />
             <Mytextinput
              placeholder="Enter location"
              value={this.state.location}
              onChangeText={location => this.setState({ location })}
              style={{ padding:10 }}
            />
            <Mytextinput
              value={this.state.priceMin}
              placeholder="Enter priceMin"
              keyboardType="numeric"
              onChangeText={priceMin => this.setState({ priceMin })}
              style={{textAlignVertical : 'top', padding:10}}
            />
             <Mytextinput
              value={this.state.priceMax}
              placeholder="Enter priceMax"
              keyboardType="numeric"
              onChangeText={priceMax => this.setState({ priceMax })}
              style={{textAlignVertical : 'top', padding:10}}
              
            />
            <Mybutton
              title="Update product"
              customClick={this.UpdateProducts.bind(this)}
            />
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    );
  }
}