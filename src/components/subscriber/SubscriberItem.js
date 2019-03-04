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
      <div style={this.getStyle()}>
        <p>
          { name }
          {phone}
            <button onClick={this.props.delSub.bind(this, id)} style={btnStyle}>DELETE</button>

    </p>
    
      </div>
    )
  }
}

// PropTypes
SubscriberItem.propTypes = {
  subs: PropTypes.object.isRequired,
  delSub: PropTypes.func.isRequired
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  cursor: 'pointer',
  float: 'right'
}

export default SubscriberItem