import React, { Component } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
class AddProuduct extends Component {
    constructor(){
        super();
        this.state={
            addProduct:[],
            type: '',
            name: '',
            specification: '',
            quantity: '',
            unit: '',
            region: '',
            zone: '',
            woreda: '',
            city: '',
            location: '',
            priceMin: '',
            priceMax: '',
            postedBy: '',
        }

    }

    componentDidMount(){
        let postedBy = this.props.match.params.id;
        this.setState({
            postedBy: postedBy
        })

    }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  onSubmit = (e) => {
    
    e.preventDefault();
    const {type, name, specification, quantity, unit, region, zone,
      woreda, city, location, priceMin,  priceMax,  postedBy } = this.state;
     
    
    axios.post('/addProduct', {type, name, specification, quantity, unit, region, zone, woreda,
         city, location, priceMin,  priceMax, postedBy });

    this.props.history.push('/')}     
    

    render() {
        const {type, name, specification, quantity, unit, region, zone,
            woreda, city, location, priceMin,  priceMax} = this.state;
        return (
            <div className='container jumbotron'>
                <form onSubmit={this.onSubmit} >
                     <label> Type:</label>
                    <input type="text" name="type" className="form-control"  value={type}    onChange={this.onChange} required/>
                    <label> Name:</label>
                    <input type="text" name="name" className="form-control"  value={name}    onChange={this.onChange} required />
                    <label> specification:</label>
                    <input type="text" name="specification" className="form-control"  value={specification}    onChange={this.onChange} required/>
                    <label> quantity:</label>
                    <input type="text" name="quantity" className="form-control"  value={quantity}    onChange={this.onChange} />
                    <label> unit:</label>
                    <input type="text" name="unit" className="form-control"  value={unit}    onChange={this.onChange} />
                    <label> region:</label>
                    <input type="text" name="region" className="form-control"  value={region}    onChange={this.onChange} />
                    <label> zone:</label>
                    <input type="text" name="zone" className="form-control"  value={zone}    onChange={this.onChange} />
                    <label> woreda:</label>
                    <input type="text" name="woreda" className="form-control"  value={woreda}    onChange={this.onChange} />
                    <label> city:</label>
                    <input type="text" name="city" className="form-control"  value={city}    onChange={this.onChange} />
                    <label> location:</label>
                    <input type="text" name="location" className="form-control"  value={location}    onChange={this.onChange} />
                    <label> priceMin:</label>
                    <input type="text" name="priceMin" className="form-control"  value={priceMin}    onChange={this.onChange} />
                    <label> priceMax:</label>
                    <input type="text" name="priceMax" className="form-control"  value={priceMax}    onChange={this.onChange} />
                    
                    <button type="submit" className="btn btn-primary">AddProuduct</button>
                </form>
                
            </div>
        )
    }
}
export default AddProuduct