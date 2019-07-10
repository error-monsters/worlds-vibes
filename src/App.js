import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom' 
import Logo from './Logo';
import Country from './Country' 
 import Music from './Music' 
// import Images from './Images' 
import Nav from './Nav' 
import Explore from './Explore' 
import './App.css'
import earth1 from "./earth1.png"
import vid from './vid.mp4';

import About from './About'




class App extends Component {
 
  render() {
    return ( 
      <React.Fragment>  
       
        <Route exact path='/' render={()=>{
          return (
            <div class='home-route'> 
        
              <Nav/> 
           
              <div className ='home-bg'> 
            
                <video autoPlay loop muted >
                  <source src={vid} type="video/mp4" />
                </video> 
                <div class="logo"> <Logo /> </div>  
              
                <Link className = 'virtical' to='/Explore'>Explore The World  </Link> 
                <Link to='/Explore'>
                <img id="small-img" src={earth1} alt ='earth pic'/> 
                </Link>
                 
               
              </div>
            </div>
          )
        }}
        />
       
        <Route path='/Explore' component={Explore}/>

        <Route path='/Country/:id' render={(props)=>{
          const countryName = props.match.params.id
          // <Country countryName={countryName} />
          return (
           
            <div class='country-route'> 
            
              <Nav/> 
              <Country countryName={countryName} />
            </div>
          )
        }}
        /> 

      <Route path='/About' component={About}/> 
      </React.Fragment> 
    )
  }
}


export default App;
