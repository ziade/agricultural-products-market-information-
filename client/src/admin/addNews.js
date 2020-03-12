import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddNews extends Component {
    constructor(){
        super();
        this.state={
            postNews:[],
            title: '',
            content: '',
            file: '',
            postedBy: '',
        }

    }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit = (e) => {
    
    e.preventDefault();
    const {title, content, file, postedBy, date} = this.state;
     
    
    axios.post('/addNews', {title, content, file, postedBy});

    this.props.history.push('/')}     
    

    render() {
        const {title, content, file, postedBy, date} = this.state;
        return (
            <div className='container jumbotron'>
                <form onSubmit={this.onSubmit} >
                     <label> title:</label>
                    <input type="text" name="title" className="form-control"  value={title}    onChange={this.onChange} required/>
                    <label> content:</label>
                    <input type="text" name="content" className="form-control"  value={content}    onChange={this.onChange} required />
                    <label> file:</label>
                    <input type="text" name="file" className="form-control"  value={file}    onChange={this.onChange} required/>
                    <label> postedBy:</label>
                    <input type="text" name="postedBy" className="form-control"  value={postedBy}    onChange={this.onChange} />
                
                    <button type="submit" className="btn btn-primary">Post News</button>
                </form>
                
            </div>
        )
    }
}
export default AddNews