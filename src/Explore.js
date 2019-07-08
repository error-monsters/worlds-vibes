import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactGlobe from 'react-globe';
import markers from './markers';
import Nav from './Nav' 
import { Link } from 'react-router-dom' 
import './Explore.css'


function getTooltipContent(marker) {
  console.log(marker)
  return   (
    <Link to={`/Country/${marker.country}`}>{marker.city}, {marker.country}</Link>
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
    setDetails(getTooltipContent(marker));
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
      <Nav/> 
      <div style={{ fontFamily: 'arial', width: '100vw', height: '100vh' }}>
        <Link className='ex-home' to='/'>Home</Link> 
        <ReactGlobe
          markers={markers}
          markerOptions={{
            getTooltipContent,
          }}
          onClickMarker={onClickMarker}
          onDefocus={onDefocus}
        />
        
        {details && (
          <div 
            style={{ //pop up box
              background: 'white', 
              position: 'absolute',
              fontSize: 20,
              top: 0,
              right: 0,
              padding: 12,
            }}>
            <p>{details}</p>
            <p>
              EVENT: type={event.type}, position=
              {JSON.stringify(event.pointerEventPosition)})
            </p>
          
          </div>
        )}
      </div>
    </div>
  );
}

export default Explore ;