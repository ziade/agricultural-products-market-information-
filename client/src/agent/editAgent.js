import React, {Component} from 'react';
import axios from 'axios';

import {Link, Route, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'
class EditAgent extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
     
      response: {},
      error: null,
      users: [],
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
 
  onChange=(e)=>{

    this.setState({ [e.target.name]: e.target.value });
  
    
}
edit = (e) => {
  e.preventDefault();
  // get our form data out of state
  const {id, firstName, lastName, email, phoneNo, sex, region, zone,
    woreda, city, location, profilePic, userName, password } = this.state;

  axios.post('/editUser', {id, firstName, lastName, email, phoneNo, sex, region, zone,
    woreda, city, location, profilePic, userName, password })
    .then((result) => {
      //access the results here....
    });
    this.props.history.push(`/agentHome/${ userName }`)
}
     

  componentDidMount(){
        let agent_id = this.props.match.params.id
      const {users, id}= this.state
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
                                   woreda: users.woreda,
                                   city: users.city,
                                   location: users.location,
                                   profilePic: users.profilePic
                                
                                })
                  })
                 
  
     }
   
  
     render() {
    
      return (
        <div className='container jumbotron'>
          <h2>Agent Detail </h2>
              <form onSubmit={this.edit} >
          <input  type="text" className="form-control"  name="firstName"  value={this.state.firstName }    onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control"  name="lastName" value={this.state.lastName}  onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control" name="email" value={this.state.email}  onChange={this.onChange} required
          /><br/>
          <input  type="tel" className="form-control"  name="phoneNo" placeholder="091-12-34-567" value={this.state.phoneNo}  onChange={this.onChange}
                 pattern="[0-9]{10}" required/><br/>
          <input  type="text" className="form-control"  name="sex" value={this.state.sex}  onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control"  name="region" value={this.state.region}  onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control"  name="zone" value={this.state.zone}  onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control"  name="woreda" value={this.state.woreda}  onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control" name="city" value={this.state.city}  onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control" name="location" value={this.state.location}  onChange={this.onChange} required
          /><br/>
          <input  type="text" className="form-control" name="profilePic" value={this.state.profilePic}  onChange={this.onChange} required
          /><br/>
           <input  type="text" className="form-control" name="userName" value={this.state.userName}  onChange={this.onChange} required
          /><br/>
          <input  type="password" className="form-control" name="password" value={this.state.password}  onChange={this.onChange} required
          /><br/>
          
          <button type="submit">Edit Agent</button>
        </form>
        </div>
      );
    }
     
    
}

export default EditAgent;