import React,{Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import Login from './Login';
import Dashboard from  './Dashboard';
import Header from './Header';
import Logout from './Logout';
import About from './About';
import Contact from './Contact'

class App extends Component{
  render(){
    return(
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/logout" component={Logout} />
          <Route path="/about" component={About}/>
          <Route path='/contact' component ={Contact}/>
        </Switch>
      </div>
    )
  }
}



export default App;
