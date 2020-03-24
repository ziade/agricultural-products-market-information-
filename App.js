/*Example of SQLite Database in React Native*/
import React from 'react';
//For react-navigation 3.0+
//import { createAppContainer, createStackNavigator } from 'react-navigation';
//For react-navigation 4.0+
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/HomeScreen';
import AddProduct from './pages/AddProduct';
import UpdateProduct from './pages/UpdateProduct';
import ViewProduct from './pages/ViewProduct';
import ViewAllProduct from './pages/ViewAllProduct';
import DeleteProduct from './pages/DeleteProduct';
import ProductPage from'./pages/ProductPage';
const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'HomeScreen',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ProductPage: {
    screen: ProductPage,
    navigationOptions: {
      title: 'Product page',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  View: {
    screen: ViewProduct,
    navigationOptions: {
      title: 'View Product',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  ViewAll: {
    screen: ViewAllProduct,
    navigationOptions: {
      title: 'View All product',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Update: {
    screen: UpdateProduct,
    navigationOptions: {
      title: 'Update Product',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  AddProduct: {
    screen: AddProduct,
    navigationOptions: {
      title: 'Add Product',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
  Delete: {
    screen: DeleteProduct,
    navigationOptions: {
      title: 'Delete product',
      headerStyle: { backgroundColor: '#f05555' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);