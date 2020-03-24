/*Screen to view all the user*/
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'ProductDatabase.db' });
export default class ViewAllProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: [],
    };
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_product', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp,
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View style={{ height: 0.2, width: '100%', backgroundColor: '#808080' }} />
    );
  };
  render() {
    return (
      <View>
        <FlatList
          data={this.state.FlatListItems}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View key={item.user_id} style={{ backgroundColor: 'white', padding: 20 }}>
              <Text>Id: {item.product_id}</Text>
              <Text>Name: {item.name}</Text>
              <Text>specification: {item.specification}</Text>
              <Text>quantity: {item.quantity}</Text>
              <Text>unit: {item.unit}</Text>
              <Text>region: {item.region}</Text>
              <Text>zone: {item.zone}</Text>
              <Text>woreda: {item.woreda}</Text>
              <Text>city: {item.city}</Text>
              <Text>location: {item.location}</Text>
              <Text>price Min: {item.priceMin}</Text>
              <Text>price Max: {item.priceMax}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}