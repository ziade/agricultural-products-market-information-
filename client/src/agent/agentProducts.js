import React, {Component} from 'react';
import axios from 'axios';
import ReactToExcel from 'react-html-table-to-excel'
import {Link, Route, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'
class AgentProducts extends React.Component {
    constructor(){
        super();
        this.state={
            products:[],
          
        }

    }
 
     componentDidMount(){
      const {products}=this.state
      fetch("/products")
      .then(res => res.json())
      .then(products => {this.setState({products})});
                  
          
  
     }
   
  
  render() {
    let postedBy = this.props.match.params.id;
  
    const { products } = this.state;
      
   return(
     
    <div>

        <h2 className="h1">agent product Detail</h2>
        <table className="container  table table-striped" id="product-tbl">
         <tr className="tr table-info">
             <th>type</th>
             <th>name</th>
             <th>specification</th>
             <th>quantity</th>
             <th>unit</th>
             <th>region</th>
             <th>zone</th>
             <th>woreda</th>
             <th>city</th>
             <th>priceMin</th>
             <th>priceMax</th>
         </tr>
         { products.map( (product) => {
           if(product.postedBy===postedBy){
           return (
         <tr>
             <td>{ product.type }</td>
             <td>{ product.name }</td>
             <td>{ product.specification }</td>
             <td>{ product.quantity }</td>
             <td>{ product.unit }</td>
             <td>{ product.region }</td>
             <td>{ product.zone }</td>
             <td>{ product.woreda }</td>
             <td>{ product.city }</td>
             <td>{ product.priceMin }</td>
             <td>{ product.priceMax }</td>
             <td class="btn-group">
                       <button><Link to={`/productDetail/${product.id }`}  className="btn-info">edit</Link></button>
                       <button onClick={this.delete} className="btn-danger">delete</button>
             </td>
             
         </tr>

        )
           }
        })  }
     </table>
     <ReactToExcel table="product-tbl"
                   filename="excelFile"
                   sheet="sheet 1"
                   buttonText="Export"/>
      </div>
     ) 
   } 
}

export default AgentProducts;