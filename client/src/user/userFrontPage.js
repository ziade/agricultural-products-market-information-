import React, { Component } from 'react'

import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

class UserFrontPage extends Component {

    render() {
        return (
            <div>
                <ul>
          <li>
            <NavLink className="btn btn-success" exact activeClassName="active" to="/">Home</NavLink>
          
            <NavLink className="btn btn-info" exact activeClassName="active" to="/userSignIn">signIn</NavLink>
            <NavLink className="btn btn-info" exact activeClassName="active" to="/userSignUp">signUp</NavLink>
          
          </li>
        </ul>
            </div>
        )
    }
}

export default UserFrontPage
