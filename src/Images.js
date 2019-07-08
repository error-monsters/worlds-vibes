import React ,{Component} from 'react';
import App from './App'
import axios from 'axios'
import './Images.css'

class Images extends Component {


    // state ={
    //     images:[]

    //     }


    componentDidMount() {
    
        axios({
          method: "get",
          url: `https://api.unsplash.com/search/collections?page=1&query=${this.props.countryName}`
        })
          .then(response => {
             console.log(response);
            
          })
          .catch();
      }


    render() {
    
    return(

            <div>
                
            </div>


    )
} }

export default Images;