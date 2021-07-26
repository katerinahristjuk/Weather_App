import React from 'react';
import {Switch, Route} from 'react-router-dom'
import { Cities } from "./Cities";
import { Nav } from "./Nav";

export function App(){

  return(
    <div id='app'>
      <h2>app</h2>
      <Nav/>
      <Switch>
        <Route path='/search-cities' component={Cities}/>

      </Switch>
      
    </div>
  )
}