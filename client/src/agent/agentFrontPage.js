import React, { Component } from 'react'

import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

class AgentFrontPage extends Component {

    render() {
        return (
            <div>
                <ul>
          <li>
            <NavLink className="btn btn-success" exact activeClassName="active" to="/">Home</NavLink>
          
            <NavLink className="btn btn-info" exact activeClassName="active" to="/agentSignIn">signIn</NavLink>
          
          </li>
        </ul>
            </div>
        )
    }
}

export default AgentFrontPage
