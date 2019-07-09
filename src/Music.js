import React from 'react';
import axios from 'axios';
import './Music.css'


 class Music extends React.Component {
  

  render() {
    return (
    <div>

<audio  autoplay="autoplay" loop controls>
        <source src="https://www.lengua.com/anthems/USA.mp3" type="audio/mp3" />   
    </audio>

    </div>
    )
  }
}

export default Music ;

