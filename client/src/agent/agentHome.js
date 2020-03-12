import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
class AgentHome extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
     
      id: '',
      userName:'',
      firstName:'',
      lastName:'',
      selectedUser:[],
     
     
    }

  }
componentDidMount(){
  
  var agentUserName = this.props.match.params.username;
  this.setState({userName: agentUserName})

  
     
    fetch("/users")
    .then(res => res.json())
    .then(data => {
                 this.setState({selectedUser: data.find(user=>(user.userName===agentUserName))});
                 const {selectedUser} = this.state;
                console.log(selectedUser)
                 this.setState({firstName: selectedUser.firstName,
                                lastName: selectedUser.lastName,
                                id: selectedUser.id})

                 }
        )
}
  render() {
    const {id, firstName, lastName}=this.state
    return (
       <div> 
        <h1> { firstName } {lastName} </h1>
        <h1></h1>
        <button className="btn-info"><Link to={`/editAgent/${id}`}  className="btn-info">account</Link> </button><br/>
        <button><Link to={`/addProduct/${id}`}  className="btn-info">Add Product</Link> </button><br/>
        <button><Link to={`/agentProducts/${id}`}  className="btn-info">View Product</Link> </button><br/>
        
         </div>
 
    );
  }
}
export default AgentHome