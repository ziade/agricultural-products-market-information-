import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Route, NavLink, BrowserRouter as Router } from 'react-router-dom'

import SignUp from './account/signUp.js';
import SignIn from './account/signIn.js';
import AdminHome from './admin/adminHome.js';
import RegisterAgent from './admin/registerAgent';
import ViewAgent from './admin/viewAgent';
import AgentDetail from './admin/agentDetail';
import AddNews from './admin/addNews';
import ViewNews from './admin/viewNews';
import AgentSIgnIn from './agent/agentSignIn';
import AgentHome from './agent/agentHome';
import AgentProducts from './agent/agentProducts'
import AddProuduct from './agent/addProuduct'
import ProductDetail from './agent/productDetail'
import AdminFrontPage from './admin/adminFrontPage'
import AgentFrontPage from './agent/agentFrontPage'
import EditAgent from './agent/editAgent'
import EditAdmin from './admin/editAdmin'
import UserFrontPage from './user/userFrontPage'
import UserSignIn from  './user/userSignIn'
import UserSignUp from  './user/userSignUp'
import UserHome from  './user/userHome'
import EditUser from './user/editUser'

import 'bootstrap/dist/css/bootstrap.css';
//import * as serviceWorker from './serviceWorker';



const routing = (
    <Router>
      <div>
        
           <Route exact path="/" component={App} />
           <Route path="/adminFrontPage" component={ AdminFrontPage } />  
           <Route path="/agentFrontPage" component={ AgentFrontPage } />  
           <Route  path="/signUp" component={ SignUp } />
           <Route  path="/signIn" component={ SignIn } />
           <Route exact path="/adminHome"  component={ AdminHome }/>
           <Route path="/adminHome/:username" component={AdminHome} /> 
           <Route path="/registerAgent" component={RegisterAgent} /> 
           <Route path="/viewAgent" component={ ViewAgent } /> 
           <Route path="/agentDetail/:id" component={ AgentDetail } /> 
           <Route path="/viewNews" component={ ViewNews } /> 
           <Route path="/addNews" component={ AddNews } /> 
           <Route path="/agentSignIn" component={ AgentSIgnIn } /> 
           <Route path="/agentHome/:username" component={ AgentHome } /> 
           <Route path="/editAgent/:id" component={ EditAgent } />  
           <Route path="/editAdmin/:id" component={ EditAdmin} />  
           <Route path="/agentProducts/:id" component={ AgentProducts } /> 
           <Route path="/addProduct/:id" component={ AddProuduct } />
           <Route path="/productDetail/:id" component={ ProductDetail } /> 
           <Route path="/userFrontPage" component={ UserFrontPage } />  
           <Route path="/userSignIn" component={ UserSignIn } />  
           <Route path="/userSignUp" component={ UserSignUp } />
           <Route path="/userHome/:username" component={ UserHome } /> 
           <Route path="/editUser/:id" component={ EditUser} />  
 
  


 

      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));


