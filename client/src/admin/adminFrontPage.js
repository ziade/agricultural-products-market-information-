import React, { Component } from 'react'

import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

class AdminFrontPage extends Component {

    render() {
        return (
            <div>
                <ul>
          <li>
            <NavLink className="btn btn-success" exact activeClassName="active" to="/">Home</NavLink>
          
            <NavLink className="btn btn-info" exact activeClassName="active" to="/signIn">signIn</NavLink>
          
            <NavLink className="btn btn-success" exact activeClassName="active" to="/signUp">signUp</NavLink>
          </li>
        </ul>
            </div>
        )
    }
}

export default AdminFrontPage
