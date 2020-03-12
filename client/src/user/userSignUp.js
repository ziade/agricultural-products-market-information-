import React, { Component } from 'react';
import axios from 'axios';
class UserSignUp extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
      selectedUser:[],
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
       profilePic: '',
       role: 'user',
       userName: '',
       password: '',
       file: null
    };
  }

  

  onChange = (e) => {
   
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    
    e.preventDefault();
    const { firstName, lastName, email, phoneNo, sex, region, zone,
      woreda, city, location, profilePic,  role, userName, password } = this.state;
     
    fetch("/users")
    .then(res => res.json())
    .then(data => {

      this.setState({selectedUser: data.find(user=>(user.userName===userName))});
      const {selectedUser} = this.state
      if(selectedUser){

        console.log(selectedUser)
  
      }
      else{
        
          axios.post('/signUp', { firstName, lastName, email, phoneNo, sex, region, zone, woreda,
                                  city, location, profilePic,  role,userName, password });

            this.props.history.push('/')
  }
    })
   
}
  render() {
    const { firstName, lastName, email, phoneNo, sex, region, zone,
          woreda, city, location, profilePic, userName, password, file } = this.state;

    return (
      <form onSubmit={this.onSubmit} enctype="multipart/form-data">

        <input  type="text"  name="firstName"  value={firstName}    onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="lastName" value={lastName}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="email" value={email}  onChange={this.onChange} required
        /><br/>
        <input  type="tel"  name="phoneNo" placeholder="091-12-34-567" value={phoneNo}  onChange={this.onChange}
               pattern="[0-9]{10}" required/><br/>
        <input  type="text"  name="sex" value={sex}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="region" value={region}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="zone" value={zone}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="woreda" value={woreda}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="city" value={city}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="location" value={location}  onChange={this.onChange} required
        /><br/>
        <input  type="file"  name="file" value={file}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="userName" value={userName}  onChange={this.onChange} required
        /><br/>
        <input  type="password"  name="password" value={password}  onChange={this.onChange} required
        /><br/>
        
        <button type="submit">SignUp</button>
      </form>
    );
  }
}
export default UserSignUp