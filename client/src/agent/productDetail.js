import React, {Component} from 'react';
import axios from 'axios';

import {Link, Route, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'
class ProductDetail extends React.Component {
    constructor(){
        super();
        this.state={
            product:[],
            id:'',
            type: '',
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
            date: '',
            postedBy: '',
        }

    }

  state= { product:[]  }
 

     
     componentDidMount(){
      
      fetch("/products")
      .then(res => res.json())
      .then(data => { let product_id = this.props.match.params.id
                    this.setState({product: data.find(product=>(product.id==product_id))});
                    const {product} = this.state
                    this.setState({id: product.id,
                                   type: product.type,
                                   name: product.name,
                                   specification: product.specification,
                                   quantity: product.quantity,
                                   unit: product.unit,
                                   region: product.region,
                                   zone: product.zone,
                                   woreda: product.woreda,
                                   city: product.city,
                                   location: product.location,
                                   priceMin: product.priceMin,
                                   priceMax: product.priceMax,
                                   date: product.date,
                                   postedBy: product.postedBy,
   
                                })
                  })     
  
     }
     onChange=(e)=>{

      this.setState({ [e.target.name]: e.target.value });
    
      
  }
  edit = (e) => {
    e.preventDefault();
    // get our form data out of state
    const {id, type, name, specification, quantity, unit, region, zone, woreda, city, location, 
             priceMin,  priceMax, postedBy } = this.state;

    axios.post('/editProduct', {id, type, name, specification, quantity, unit, region, zone, woreda, 
                                city, location, priceMin,  priceMax })
      .then((result) => {
        //access the results here....
      });
      this.props.history.push(`/agentProducts/${postedBy}`)
  }


  
  render() {
  
        return (
          <div className='container jumbotron'>
              <form onSubmit={this.edit} >
                   <label> Type:</label>
                  <input type="text" name="type" className="form-control"  value={this.state.type}    onChange={this.onChange} required/>
                  <label> Name:</label>
                  <input type="text" name="name" className="form-control"  value={this.state.name}    onChange={this.onChange} required />
                  <label> specification:</label>
                  <input type="text" name="specification" className="form-control"  value={this.state.specification}    onChange={this.onChange} required/>
                  <label> quantity:</label>
                  <input type="text" name="quantity" className="form-control"  value={this.state.quantity}    onChange={this.onChange} />
                  <label> unit:</label>
                  <input type="text" name="unit" className="form-control"  value={this.state.unit}    onChange={this.onChange} />
                  <label> region:</label>
                  <input type="text" name="region" className="form-control"  value={this.state.region}    onChange={this.onChange} />
                  <label> zone:</label>
                  <input type="text" name="zone" className="form-control"  value={this.state.zone}    onChange={this.onChange} />
                  <label> woreda:</label>
                  <input type="text" name="woreda" className="form-control"  value={this.state.woreda}    onChange={this.onChange} />
                  <label> city:</label>
                  <input type="text" name="city" className="form-control"  value={this.state.city}    onChange={this.onChange} />
                  <label> location:</label>
                  <input type="text" name="location" className="form-control"  value={this.state.location}    onChange={this.onChange} />
                  <label> priceMin:</label>
                  <input type="text" name="priceMin" className="form-control"  value={this.state.priceMin}    onChange={this.onChange} />
                  <label> priceMax:</label>
                  <input type="text" name="priceMax" className="form-control"  value={this.state.priceMax}    onChange={this.onChange} />
                  
                  <button type="submit" className="btn btn-primary">Edit Prouduct</button>
              </form>
              
          </div>
      )
   } 
}

export default ProductDetail;