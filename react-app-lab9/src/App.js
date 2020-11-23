//import logo from './logo.svg';
//import './App.css';
import React, {Component, lazy, Suspense} from "react";
import {Footer, Header} from './components'
import {BrowserRouter, Route, Switch, Redirect, Link, NavLink} from 'react-router-dom';

const LazyCreations = lazy(() => import(/* webpackChunkName: 'creations' */'./features/creations'));
const LazyBox = lazy(() => import(/* webpackChunkName: 'box' */'./features/box'));
const LazyAnimations = lazy(() => import(/* webpackChunkName: 'box' */'./features/animations'));

class Tab extends Component{
    render() {
        return(
            <div className="d-flex justify-content-center pt-5">
                <div className="tabs">
                    <ul>
                        <li className="is-active">
                            <NavLink to="/creations" className="nav-link" activeClassName="active">Pictures</NavLink>
                        </li>
                        <li >
                            <NavLink to="/box" className="nav-link" activeClassName="active">Trending</NavLink>
                        </li>

                        <li>
                            <NavLink to="/animations" className="nav-link" activeClassName="active">P5 JS animations</NavLink>
                        </li>


                    </ul>
                </div>
            </div>
        )
    }
}


class App extends Component{

  render() {
      return(

        <>
            <Header/>

                    <Suspense fallback={<h1>Loading...</h1>}>
                        <BrowserRouter>
                            <Tab/>
                            <Switch>
                                <Route path="/box" component = { LazyBox } />
                                <Route path="/creations" component = { LazyCreations } render={props => ( {...props} )}/>
                                <Route path="/animations" component={ LazyAnimations}/>

                                <Redirect to="/creations"/>
                            </Switch>
                        </BrowserRouter>
                    </Suspense>

              <Footer/>

        </>


      )
  }
}

export default App;
