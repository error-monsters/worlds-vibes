import React from 'react';
import axios from 'axios';
import './Music.css'
import markers from './markers';

 class Music extends React.Component {
  

  render() {
    const name = this.props.name;
    console.log(this.props)
    console.log(this.props.name)
    const music = markers.find(countryObject => countryObject.country === name).music

    return (
    <div className="music">

<audio  autoplay="autoplay" loop controls>
        <source src={music} type="audio/mp3" />   
    </audio>

    </div>
    )
  }
}

export default Music ;

