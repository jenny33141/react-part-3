import React from 'react';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Nav from './components/Nav'

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
      <Nav/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      </Switch>
      </BrowserRouter>
      
    )
  }
}

export default App;
