import React, {Component} from 'react';
import axios from 'axios';

import {Link, Route, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'
class AgentDetail extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
     
      response: {},
      error: null,
      users: [],
      products: [],
      id:'',
        firstName: '',
        lastName: '',
        email: '',
        phoneNo: '',
        sex: '',
        region: '',
        zone: '',
        woreda: '',
        city: '',
        location: '',
        profilePic: ''
     
    }

  }

  state= { users:[]  }
 

     
     componentDidMount(){
        let agent_id = this.props.match.params.id
      const {products, id}= this.state
      fetch("/users")
      .then(res => res.json())
      .then(data => { 
                    this.setState({users: data.find(user=>(user.id==agent_id))});
                    const {users} = this.state
                    this.setState({id: users.id,
                                   firstName: users.firstName,
                                   lastName: users.lastName,
                                   email: users.email,
                                   phoneNo: users.phoneNo,
                                   sex: users.sex,
                                   region: users.region,
                                   zone: users.woreda,
                                
                                })
                  })
        fetch("/products")
        .then(res => res.json())
        .then(products => {  this.setState({products});
                     console.log(products)
                    })           
  
     }
   
  
  render() {
    let postedBy = this.props.match.params.id;
      const {id,firstName,lastName, email, phoneNo, region, zone, woreda, products}=this.state
      
   return(
     
    <div>
    <h2 className="h1">{firstName} {lastName} Detail</h2>
          <ul className="container">
            <li>Email: { email}</li>
            <li>phoneNo: { phoneNo}</li>
            <li>Region: { region}</li>
            <li>Zone: { zone}</li>
            <li>woreda: { woreda}</li>
            </ul>  
     <h3>recent posts</h3>   
     <table className="container  table table-striped">
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
             <th>date</th>
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
             <td>{ product.date }</td>
         </tr>

        )
           }
        })  }
     </table>
                
       
        
      </div>
     ) 
   }
     
    
}

export default AgentDetail;