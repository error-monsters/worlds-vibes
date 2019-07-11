import React,{Component} from 'react'; 
import { Route, Link } from 'react-router-dom' 
import About from './About' 
import './Nav.css'  
import Logo from './Logo' 


class Nav extends Component {
    render () {
        return ( 
            <div class='header-container'>
         
      <header>
          <nav>
       
              <ul>
                <li>
                <a href="#"> <Link to='/'>Explore</Link> </a>
                </li>
                <li>
                <a href="#">  <Link to='/About'>About</Link> </a>
                  
                </li>
                <li>
                  <a href="#">  <Link to='/Explore'>Find</Link> </a>
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