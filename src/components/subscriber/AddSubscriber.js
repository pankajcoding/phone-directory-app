import React, { Component } from 'react';
import { Link,withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

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
         <div className="row" >
                  <div  className="col-xs-12
                                col-sm-12
                                col-md-6
                                col-lg-6">
                         
                             <form onSubmit={this.handleSubmit}>
                             <fieldset>
                                <label>
                                  Name:
                                  </label>
                                  <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                                
                              </fieldset>
                              <fieldset>
                                  <label>
                                  Phone:
                                   </label>
                                  <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                               
                              </fieldset>
                              <p style={subheadingStyle}>Subsciber to be added:</p>
                                
                              <p> <span >Name:</span> {this.state.name} <br/>
                              <span>Phone:</span>  {this.state.phone}
                              </p> 
                              <p> </p>
                              <input style={submitbtnStyle} type="submit" value="Submit" />
                              </form>
                    </div>
          </div>
  
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

const subheadingStyle={
  color:'#44607b',
  fontSize:'1.2em',
  fontWeight:'500',
  marginBottom:'0px'
  
}
const submitbtnStyle = {
  color: '#fff',
  background:'#72BA6F',
  textDecoration: 'none',
  padding:'12px 19px',
  display: 'block',
  width: '110px',
  textAlign: 'center',
  marginLeft: '0px',
  marginBottom: '30px',
  border:'0',
  cursor:'pointer'
}

export default withRouter(AddSubscriber);