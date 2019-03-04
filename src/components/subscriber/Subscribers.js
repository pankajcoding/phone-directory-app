
import React, { Component } from 'react';
import TodoItem from './SubscriberItem';
import PropTypes from 'prop-types';

class Subscribers extends Component {
  render() {
    return this.props.subs.map((sub) => (
      <TodoItem key={sub.id} sub={sub}  delSub={this.props.delSub}/>
    ));
  }
}

// PropTypes
Subscribers.propTypes = {
  subscribers: PropTypes.array.isRequired,
  delSub: PropTypes.func.isRequired
 
}

export default Subscribers;