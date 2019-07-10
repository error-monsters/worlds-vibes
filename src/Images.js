import React ,{Component} from 'react';
import axios from 'axios'
import './Images.css'


class Images extends Component {


    state ={
        images:[]

        }

    componentWillMount = () => {
      
        axios({
          method: "get",
          url: `https://api.unsplash.com/search/collections?page=1&query=${this.props.countryName}&client_id=6a55232e978d0bd27dffd107ad0c5256760672498375b240849f43f6b779d41a`
        })

          .then(response => {
            // console.log("Images")
           
            console.log(response.data.results)
            let randomFirstAraay = Math.floor(Math.random() * response.data.results.length)
            let randomSecondArray =Math.floor(Math.random() * response.data.results[randomFirstAraay].preview_photos.length)
        
            this.props.updateBackground(response.data.results[randomFirstAraay].preview_photos[randomSecondArray].urls.full);
            this.setState({
              images: response.data.results
            })
             
            
          })
          .catch(error => console.log(error));
      }


    render() {
      let randomFirstAraay;
      let randomSecondArray;
      if(this.state.images.length)
      {
        randomFirstAraay = Math.floor(Math.random() * this.state.images.length -1)
        randomSecondArray =Math.floor(Math.random() * this.state.images[randomFirstAraay].preview_photos.length)
      }
      // console.log(this.state.images[randomFirstAraay])
  
    return(
     
     
       <React.Fragment> 

       </React.Fragment>
  
  
        // <div>
        //        {this.state.images.length && <img src={this.state.images[randomFirstAraay].preview_photos[randomSecondArray].urls.full} width="400" height="400"/>} 
        //   </div>


    )
} 
}

export default Images;
