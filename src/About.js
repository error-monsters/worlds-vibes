import React,{ Component} from "react"
import Nav from './Nav'
import './About.css'
import about_us from "./about_us.jpeg"

class About extends Component{
    componentDidMount(){
        document.body.style.background =  {about_us};
        document.body.style.backgroundSize="cover";
      }
    render (){
        return ( 
        <div className ='about-page'>
            <Nav />
            <iframe frameborder="no" width="1024" height="576" src="https://app.wideo.co/embed/26530131562753453961?width=1024&height=576&repeat=true&autoplay=true"></iframe>
           
        </div>)
    }
}
export default About;