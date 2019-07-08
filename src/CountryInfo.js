import React, {Component} from 'react';
import {searchContersName} from "./api";
// import axios from 'axios';


class CountryInfo extends Component{

  componentDidMount(){

    console.log("api running!!");

    searchContersName("saudi arabia")

   .then(response => {

     console.log(response);
    
     console.log(response.data[0].name)
     console.log(response.data[0].capital)
     console.log(response.data[0].region)
     console.log(response.data[0].population)
     console.log(response.data[0].area)

   })
   .catch(() => {
     console.log("There was an Erorr!!");
   })
  }

  render(){

    return(
      <div>
        <h1>Country Information</h1>
        
      </div>
    )
  }
}


export default CountryInfo;
