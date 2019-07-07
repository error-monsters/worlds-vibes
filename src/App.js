import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom' 
// import logo from './logo.svg';
import Country from './Country' 
// import Music from './Music' 
// import Images from './Images' 
import Nav from './Nav' 
import Explore from './Explore' 
import VideoCover from 'react-video-cover';
import './App.css'
import earth1 from "./earth1.png"
import vid from './vid.mp4';



class App extends Component {
 
  render() {
    return ( 
      <div>  
        <Nav/>
        <Country /> 
        <Route exact path='/' render={()=>{
          return (
            <div className ='home-bg'>   
              <video autoPlay loop muted >
                <source src={vid} type="video/mp4" />
              </video> 
              <Link className = 'virtical' to='/Explore'>Explore The World  </Link> 
              <Link to='/Explore'>
              <img id="small-img" src={earth1} alt ='earth pic'/> 
              </Link>
            </div>
          )
        }}
        />

        <Route path='/Explore' component={Explore}/>
       
        <Route path='/Country/:id' render={(props)=>{
          const countryName = props.match.params.id
          // <Country countryName={countryName} />
          return (
            
            <p>{countryName}</p>
          )
        }}
        /> 
      </div> 
    )
  }
}

export default App;
