import React, {Component} from 'react';
import axios from 'axios';

import {Link, Route, NavLink, BrowserRouter as Router, Redirect } from 'react-router-dom'
class ViewNews extends React.Component {
  constructor(props){
    super(props)
    this.state={
        news:[],
    }
  }
  componentDidMount(){    
    axios.get("/news").then(res=>{
      const news =res.data;
      this.setState({news});
    })
}

  render() {
  
   return(
    <div className='container jumbotron'>
      {this.state.news.map(posts => <div className='container jumbotron'>
      <p>title: {posts.title}</p>
      <p className="p">content: {posts.content}</p>
      <p>file: {posts.file}</p>
      <p>postedBy: {posts.postedBy}</p>
      <p>date: {posts.date}</p>
      <form onSubmit={this.handleEditSubmit}>
        <button type="submit" value={posts.id} onClick={e => this.onEdit(e)}>Edit</button>
      </form>
      <form onSubmit={this.handleSubmit}>
            <button type="submit" value={posts.id} onClick={e => this.onClick(e)}>Delete</button>
      </form>
      </div>)}
 
      
    </div>
     );
   } 
}


export default ViewNews;