//import logo from './logo.svg';
//import './App.css';
import React, {Component} from "react";
import {Header} from './components'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';



class App extends Component{

  render() {
      return(
          <div>
              <Header/>
          </div>
      )
  }
}

export default App;
