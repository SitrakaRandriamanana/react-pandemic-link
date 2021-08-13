import React, { Component } from 'react';
import './App.css';
import Home from './components/home';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/news';
import Header from './components/header';

class App extends Component {
  
 

  render(){
    return (
      <div>
        
        <BrowserRouter>
        <Header/>
            <Route path="/" exact component={Home}/>
            <Route path="/components" component={News}/>
        </BrowserRouter> 
      </div>
    );
  }
}

export default App;
