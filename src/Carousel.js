import React, { Component } from "react";
import axios from 'axios'
import M from "materialize-css";
// import one from "../public/1.jpg";
import two from "./2.png";
import three from "./3.png";
import four from "./4.jpg";
// import five from "../public/5.jpg";
import "./Carousel.scss"



class Carousel extends Component {
  state = {
    // country: this.props.countryName,
    images: []
  }
  componentDidUpdate() {
    // A whole lotta functions here, fired after every render.
    if (this.state.images.length > 0 ) {
      const options = {
        duration: 300,
        onCycleTo: () => {
          console.log("New Slide");
        }
      };
      M.Carousel.init(this.Carousel, options);
    }
  }
  componentDidMount() {
    console.log('country name', this.props.countryName)
    // console.log("diddd")
    axios({
      method: "get",
      url: `https://api.unsplash.com/search/collections?page=1&query=${this.props.countryName}&client_id=6a55232e978d0bd27dffd107ad0c5256760672498375b240849f43f6b779d41a`
    })
    .then(response => {
      const imagesApi = response.data.results;
      console.log('crousel', response)
      this.setState({
        images: imagesApi
      })
    })
  }

  render() {
    console.log('render carousel', this.state.images)

    return (
      <div
        ref={Carousel => {
          this.Carousel = Carousel;
        }}
        className="carousel"
      >

        {this.state.images && this.state.images.map((image, index) => {
          return (
            <a key={index} className="carousel-item">
              <img alt={index} src={image.cover_photo.urls.full} />
            </a>
          )
        })}

      </div>

    )
  }
}





export default Carousel;