import React, {Component} from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Main from "./pages/main";


export default class App extends Component{


  render(){
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
      </>
    );
  }
 
}
