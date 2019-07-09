import React, {Component} from 'react';
import { Route} from 'react-router-dom' 
import axios from 'axios';
import './Country.css'
import Music from './Music' 
import test from './test' 


 class Country extends Component {
  state = {
    country: {
      name: '',
      capital: '',
      flag: '',
      region: '',
      nativeName: '',
      languages: '',
      currencies: ''
    }
  }

  componentDidMount() {
    // console.log(this.props.countryName)
    axios.get(`https://restcountries.eu/rest/v2/name/${this.props.countryName}`)
    // axios.get(`https://restcountries.eu/rest/v1/name/{countryName}`)

    .then( (result)=>{ 
      console.log(result)
      // const countryName = this.props.id
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
    



  }

  render() {
    return (
      <div>

        <test/>
       
        <div className="country-info">  
        <br/>
             <h1> {this.state.country.name}</h1> 
             <img className ='flag-pic' src={this.state.country.flag} /> 
             <hr />
            <p className="info-style"> 
                The Capital City is: {this.state.country.capital},
                and the region for {this.state.country.name} is: {this.state.country.region}, 
                therefore the native name is: {this.state.country.nativeName}, 
                and the spoken language is: {this.state.country.languages}, 
                the used currency: {this.state.country.currencies}, 
                
                
            </p>
        </div>

        <Music />
        </div>
    )
  }
}

export default Country ;