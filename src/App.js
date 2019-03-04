import React, { Component } from 'react';
import { BrowserRouter as Router, Route,Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import Subscribers from  './components/subscriber/Subscribers';
import AddSubscriber from  './components/subscriber/AddSubscriber';


class App extends Component {
  
  state={
    subs:[]
  }
  
  delSub = (id) => {
    this.setState({subs:[...this.state.subs.filter(sub=>sub.id!=id)]})
  }
  
  addSub=(sub)=>{
    this.sub=sub;
    const index=this.state.subs.length+1;
    this.sub.id=index;
    console.log('sub',this.sub)
    this.setState({
      subs:[...this.state.subs,this.sub]
    })
    console.log(this.state.subs)
  }
  
  render() {
    return (
      <Router>
       <div className="App">
          <div className="appcontainer">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Link style={linkStyle} to="/add">ADD</Link>
                <div class="row">
                    <div  className="col-xs-12
                                col-sm-12
                                col-md-6
                                col-lg-4 tableHeader">
                        Name
                    </div>
                     <div  className="col-xs-12
                                col-sm-12
                                col-md-6
                                col-lg-4 tableHeader">
                        Phone
                    </div>
               </div>
                <Subscribers subs={this.state.subs} delSub={this.delSub}/>
              </React.Fragment>
            )} />
            
            <Route  path="/add" render={props => (
              <React.Fragment>
                  <AddSubscriber  addSub={this.addSub}/>
              </React.Fragment>
            )} />
          </div>  
        </div>
      
      </Router>
    );
  }
}

const linkStyle = {
  color: '#fff',
  background:'#72BA6F',
  textDecoration: 'none',
  padding:'10px 30px',
  display: 'block',
  width: '50px',
  textAlign: 'center',
  marginLeft: '40px',
  marginBottom: '30px'
}

export default App;
