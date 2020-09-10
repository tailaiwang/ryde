import React from 'react';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Main from "./pages/main";
import Login from "./pages/login";


export default function App(){
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
          </Switch>
        </Router>
      </>
    );
 
}
