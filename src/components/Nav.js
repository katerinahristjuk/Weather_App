import React from 'react';
import {Link} from 'react-router-dom'
import './../assets/Nav.css';

export function Nav(){

  return(
    <div id='nav'>
      <ul>
          <li><Link to='/'>Home     </Link></li>
          <li><Link to='/search-cities'>Search cities</Link></li>
      </ul>
    </div>
  )
}