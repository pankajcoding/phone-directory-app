import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Subscribers from  './components/subscriber/Subscribers'


class App extends Component {
  
  state={
    subs:[
      {
        id:1,
        name:'some name',
        phone:'9999999'
      },{
        id:2,
        name:'sdaad',
        phone:'292829'
      }
      ]
  }
  
  delSub = (id) => {
    this.setState({subs:[...this.state.subs.filter(sub=>sub.id!=id)]})
  }
  
  render() {
    return (
      

       <div className="App">
          <div className="container">
            <Header />
            <Subscribers subs={this.state.subs} delSub={this.delSub}/>
          </div>  
        </div>
      
      
    );
  }
}

export default App;
