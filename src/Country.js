import React, {Component} from 'react';
import { Route} from 'react-router-dom' 
import axios from 'axios';
import './Country.css'
import Music from './Music' 
import Carousel from "./Carousel";
import Logo from './Logo';
import Images from './Images';

 class Country extends Component {
  // componentDidUpdate(){
  //   document.body.style.background =  "url('https://static-2.gumroad.com/res/gumroad/618114383609/asset_previews/e430b34b1f98b55edcd879858b44d4df/retina/Beautiful_20Sunrise_20Scene_204K_20Nature_20Background_20Flowers_20Plants_20Fog_20Mountains.jpg')";
  //   document.body.style.backgroundSize="cover";
  // }


  state = {
    country: {
      name: '',
      capital: '',
      flag: '',
      region: '',
      nativeName: '',
      languages: '',
      currencies: ''
    },
    backgroundImage: ''
  }

  componentDidMount() {

    //console.log(this.props.countryName)
    axios.get(`https://restcountries.eu/rest/v2/name/${this.props.countryName}`)
    // axios.get(`https://restcountries.eu/rest/v1/name/{countryName}`)

    .then( (result)=>{ 
      // console.log('country response', result)
        this.setState({
          country: {
            name: result.data[0].name, // result === xyz
            capital: result.data[0].capital,
            flag: result.data[0].flag,
            region: result.data[0].region,
            nativeName: result.data[0].nativeName,
            languages: result.data[0].languages[0].name,
            currencies: result.data[0].currencies[0].name
          }
        })

    })  
    .catch ({

    })


   // document.body.style.background = this.state.backgroundImage;
  }

  updateBackground = (image) => {
    this.setState({
      backgroundImage: image
    })
  }
  render() {
    let styleBackground = {}
    if (this.state.backgroundImage) {
      styleBackground = {
        backgroundImage: "url(" + this.state.backgroundImage + ")"
      }
    }
    return (
      <div style={styleBackground} className="country-body">
         <div class="logo"> <Logo /> </div>  
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
         <br/>
        <div className="country-info">  
          <br/>
            <h1> {this.state.country.name}</h1> 
            <img className ='flag-pic' src={this.state.country.flag} alt={this.state.country.name}/> 
            <hr />
            <p className="info-style"> 
                The Capital City is: {this.state.country.capital},
                and the region for {this.state.country.name} is: {this.state.country.region}, 
                therefore the native name is: {this.state.country.nativeName}, 
                and the spoken language is: {this.state.country.languages}, 
                the used currency: {this.state.country.currencies}.
                
            </p>
            {this.state.country.name.length && <Images updateBackground={this.updateBackground} countryName={this.state.country.name}/>}
            
        </div>

     <div className="container">
        {this.state.country.name ? <Carousel countryName={this.state.country.name}/> : '' }

        {this.state.country.name ? <Music name={this.state.country.name}/> : ''} 
        
        </div> 





      </div>
    )
  }
}

export default Country ;