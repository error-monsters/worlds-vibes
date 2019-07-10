import React, { useState, Component } from 'react';
import ReactGlobe from 'react-globe';
import markers from './markers';
import Nav from './Nav' 
import { Link } from 'react-router-dom' 
import airplane from './airplane.png'
import './Explore.css' 
import Logo from './Logo';
// import {Helmet} from 'react-helmet';


function getTooltipContent(marker) {
  // console.log(marker.city)
  return `${marker.city}, ${marker.country}` // highlited name 
  
}

function getMarkerLink(marker) {
  // console.log(marker.city)
  return   (
    <div>
        
      <p>{marker.city}, {marker.country} </p>
      <Link  className ='see-more-button' to={`/Country/${marker.country}`}> 
      See More 
      {/* <img id="air-img" src={airplane} alt ='airplane'/>  */}
    </Link>
   </div>
    
  ); //pop up content
  
}



function Explore() {
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);
  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: 'CLICK',
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }, //change to a new pages 
    });
    setDetails(getMarkerLink(marker));
  }
  function onDefocus(previousCoordinates, event) {
    setEvent({
      type: 'DEFOCUS',
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY },
    });
    setDetails(null);
  }

  return (
    <div class="explore-route">
      <div class="logo"> <Logo /> </div> 
      <Nav/> 
      <div style={{ fontFamily: 'arial', width: '100vw', height: '100vh' }}>
        {/* <Link className='ex-home' to='/'>Home</Link>  */}
        <ReactGlobe
          markers={markers}
          markerOptions={{
            getTooltipContent, 
          }}

          onClickMarker={onClickMarker}
          onDefocus={onDefocus}
        />
        
        {details && (
          <div className='page-link' >
            <p>{details}</p>
          
          </div>
        )} 
      </div>
    </div>
  );
}

export default Explore ;