import React from 'react';
import './App.css';

import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

function App() {

 
  return (
    <div className="App">
      <h1>Agricultural market information system</h1>
      <ul>
          <li>
            <NavLink className="btn btn-success" exact activeClassName="active" to="/adminFrontPage">Admin Page</NavLink>
          
            <NavLink className="btn btn-info" exact activeClassName="active" to="/agentFrontPage">Agent Page</NavLink>
          
            <NavLink className="btn btn-success" exact activeClassName="active" to="/userFrontPage">User page</NavLink>
          </li>
        </ul>
    </div>
  );
}

export default App;
