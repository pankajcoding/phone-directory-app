import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SubscriberItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    }
  }

  render() {
    const { id, name,phone } = this.props.sub;
    return (
                <React.Fragment>
                <div className="row" style={wrapStyle}>
                  <div  className="col-xs-12
                                col-sm-12
                                col-md-6
                                col-lg-4">
                         { name }
                    </div>
                     <div className="col-xs-12
                                col-sm-12
                                col-md-6
                                col-lg-4">
                        {phone}
                         
                    </div>
                    <div className="col-xs-12
                                col-sm-12
                                col-md-6
                                col-lg-4">
                      
                         <button onClick={this.props.delSub.bind(this, id)} style={btnStyle}>DELETE</button>
                    </div>
                    </div>
                  </React.Fragment>
  
    )
  }
}

// PropTypes
SubscriberItem.propTypes = {
  subs: PropTypes.object.isRequired,
  delSub: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#F18594',
  color: 'rgb(16, 16, 16)',
  border: 'none',
  padding: '9px 14px',
  cursor: 'pointer',
  float: 'left',
  position: 'relative',
  top: '-8px',
  marginLeft:'30%'
}
const wrapStyle = {
  marginBottom:'10px',
  marginTop:'10px'
}

export default SubscriberItem