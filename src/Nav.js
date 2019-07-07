import React,{Component} from 'react';
import './Nav.css'  

class Nav extends Component {
    render () {
        return ( 
            <div class='header-container'>
           
      <header>
          <nav>
              <ul>
                <li>
                  <a href="#">Explore</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Search</a>
                </li>
              
              </ul>
            </nav>
      </header>
      
      <div id="earth_div"></div>
 
            </div>
        )
    }
}

export default Nav; 