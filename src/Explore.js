import React, { useState, Component } from 'react';
import ReactGlobe from 'react-globe';
import markers from './markers';
import Nav from './Nav' 
import { Link } from 'react-router-dom' 
import './Explore.css' 
import Logo from './Logo';
// import seeMore from 'seeMore.png';


function getTooltipContent(marker) {
  return `${marker.city}, ${marker.country}` // highlited name 
  
}

function getMarkerLink(marker) {
  return   (
    <div>
        
      <p>{marker.city}, {marker.country} </p>
      <Link  className ='see-more-button' to={`/Country/${marker.country}`}> 
      View More  
      {/* <div> */}
      <br/>
      <img id="air-img" src="https://static.thenounproject.com/png/57053-200.png" alt ='see more'/> 
      {/* </div> */}
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