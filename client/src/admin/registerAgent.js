import React, { Component } from 'react';
import axios from 'axios';
var generator = require('generate-password');
class RegisterAgent extends Component {
  constructor() {
    super();
    this.state = {
      users:[],
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
      role: '2',
      userName: '',
      password: '',
       isActive: false
    };
  }

  onChange=(e)=>{

    this.setState({ [e.target.name]: e.target.value }); 
 }
agentGenerate=(e)=>{

    const {firstName}= this.state
    var user = Math.floor(Math.random()*( 998 )+1)

    var password = generator.generate({
        length: 10,
        numbers: true,
        uppercase: false
    });
    this.setState({
        userName: firstName + user,
        password: password,
        isActive: true
    })
    

    
}
agentCreate=(e)=>{
        e.preventDefault();
        const { firstName, lastName, userName, password } = this.state;
         
        fetch("/users")
            .then(res => res.json())
            .then(data => {
                this.setState({selectedUser: data.find(user=>(user.userName===userName))});
                const {selectedUser} = this.state
                if(selectedUser){
            
                    console.log(selectedUser)
            
                }
                else{
                    
                    axios.post('/signUp', { firstName, lastName,userName, password });
            
                        this.props.history.push('/')
               }
        })
       
    }
 

  render() {
    const { firstName, lastName, userName, password } = this.state;

    return (
        
     <div>
         <h1>Register Agent</h1>

         <input  type="text"  name="firstName" value={firstName}  onChange={this.onChange} required
        /><br/>
        <input  type="text"  name="lastName" value={lastName}  onChange={this.onChange} required
        /><br/>
         <button onClick={this.agentGenerate}>Generate userName & password</button>
         {this.state.isActive ?  <h3>user name = { userName }</h3>: null }
         {this.state.isActive ?  <h3>password = { password }</h3>: null }
         {this.state.isActive ?  <button onClick={this.agentCreate}>Create Agent</button> : null }
     </div>
     
    );
  }
}
export default RegisterAgent