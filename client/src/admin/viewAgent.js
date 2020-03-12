import React, {Component} from 'react';
import axios from 'axios';

import {Link, Route, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'


class ViewAgent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {},
      error: null,
      users: []
    }
  }

  state= { users:[]  }
 
  componentDidMount() {
 
     fetch("/users")
     .then(res => res.json())
     .then(users => this.setState({users }));
     }
  
     
    delete = (e)=>{
      const { agentId, firstName, lastName } = this.state;
  
    }
  render() {
    const { users} = this.state;

      return(
        <div className="container jumbotron">
            <h2>Agent List</h2>
        
            { users.map( (user) => {
                if(user.role==="agent"){
               return (<div>
                
                        <Link to={`/agentDetail/${user.id }`}  className="btn-info">{ user.firstName } { user.lastName }</Link><br/>
                     </div>   
                     )

               }
            })  }
        </div>
      )
    
  }
}

export default ViewAgent;