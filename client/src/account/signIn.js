import React, { Component } from 'react';
import axios from 'axios';
class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
      selectedUser:[],
       userName: '',
       password: '',
       role: 'admin'
    };
  }

  

  onChange = (e) => {
   
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {  userName, password, role} = this.state;
     
    fetch("/users")
    .then(res => res.json())
    .then(data => {

      this.setState({selectedUser: data.find(user=>((user.userName==userName && user.password==password) && user.role== role))});
      const {selectedUser} = this.state
      if(!selectedUser){

        console.log('user does not exits')
  
      }
      else{
        console.log(selectedUser)
          
        this.props.history.push(`/adminHome/${ userName }`)
  }
    })
 
}
  render() {
    const { userName, password } = this.state;

    return (
      <div className='container jumbotron'>
        <h2>admin SignIn</h2>
      <form onSubmit={this.onSubmit} enctype="multipart/form-data">
       <input  type="text" className="form-control"  name="userName" value={userName}  onChange={this.onChange} required
        /><br/>
        <input  type="password" className="form-control"   name="password" value={password}  onChange={this.onChange} required
        /><br/>
        
        <button type="submit">SignIn</button>
      </form>
      </div>
    );
  }
}
export default SignIn