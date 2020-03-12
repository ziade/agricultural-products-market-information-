import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom'
class AdminHome extends Component {
 
  constructor(props) {
    super(props);
    
    this.state = {
     
      id: '',
      username:'',
      selectedUser: []
     
     
    }

  }
componentDidMount(){
  
  var UserName = this.props.match.params.username;
  this.setState({userName: UserName})

  
     
    fetch("/users")
    .then(res => res.json())
    .then(data => {
                 this.setState({selectedUser: data.find(user=>(user.userName===UserName))});
                 const {selectedUser} = this.state;
                console.log(selectedUser)
                 this.setState({firstName: selectedUser.firstName,
                                lastName: selectedUser.lastName,
                                id: selectedUser.id})

                 }
        )
}
  render() {
    const {username, id}=this.state
    return (
       <div> 
        <h1> { username }</h1>
        <h1>Admin Home Page</h1>
        <button className="btn-danger"><Link to={`/editAdmin/${id}`}  className="btn-info">Account</Link> </button><br/>
        <button><Link to={`/registerAgent`}  className="btn-info">Add Agent</Link> </button><br/>
        <button><Link to={`/viewAgent`}  className="btn-info">View Agent</Link> </button><br/>
        <button><Link to={`/addNews`}  className="btn-info">add News</Link> </button><br/>
        <button><Link to={`/viewNews`}  className="btn-info">View News</Link> </button>
        
         </div>
 
    );
  }
}
export default AdminHome