import React from 'react';
import axios from 'axios';
import './Country.css'


 class Country extends React.Component {
  

  componentDidMount() {
    axios.get(`https://api.musixmatch.com/ws/1.1/chart.artists.get?format=jsonp&callback=callback&country=us&apikey=f3c9c2f4df0905ad15ddfa924e832e60
    `)
    // ${this.props.countryName}

    .then(function (result){
        console.log(result); // result === xyz
    })
    //   .then(res => {
    //     const countries = res.data;
    //     this.setState({ countries });
        
    //   })


  }

  render() {
    return (
    <div>

    </div>
    )
  }
}

export default Country ;

