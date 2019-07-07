import React from 'react';
import axios from 'axios';
import './Country.css'


 class Country extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    axios.get(`https://restcountries.eu/rest/v2/`)
    // axios.get(`https://restcountries.eu/rest/v1/name/{countryName}`)

    .then(function (result){
        console.log(result); // result === xyz
    })
    //   .then(res => {
    //     const countries = res.data;
    //     this.setState({ countries });
        
    //   })


    axios.get(`https://restcountries.eu/rest/v2/`)
 

    .then(function (result){
        console.log(result); // result === xyz
    })


  }

  render() {
    return (
        <section className="results">
        <div className="country-info">
            <ul id="countries">
                {this.state.countries.map(country => <li>{country .name}</li>)}
            </ul>
        </div>
    </section>
    )
  }
}

export default Country ;