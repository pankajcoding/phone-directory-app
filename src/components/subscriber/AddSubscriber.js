import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import TodoItem from './SubscriberItem';

class AddSubscriber extends Component {
    state = {
        name: '',
        phone:''
        
    };
   
  handleChange = (e)=>{
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target)
  }

  handleSubmit= (e) => {
    e.preventDefault();
    this.props.addSub({name:this.state.name,phone:this.state.phone});
    this.setState({ name: '',phone:'' });
    this.props.history.push('/');
  }
  
  render() {
    return (
      <React.Fragment>
       <Link style={linkStyle} to="/">BACK</Link> 
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        </label>
          <label>
          Phone:
          <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {this.state.name}
        {this.state.phone}
      </form>
      </React.Fragment>
    );
  }
}

// PropTypes
AddSubscriber.propTypes = {
   addSub: PropTypes.func.isRequired
}

const linkStyle = {
  color: '#000',
  textDecoration: 'none',
  padding:'10px 30px',
  display: 'block',
  width: '50px',
  textAlign: 'center',
  marginLeft: '40px',
  marginBottom: '20px'
}

export default withRouter(AddSubscriber);