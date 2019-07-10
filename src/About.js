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
           
        </div>)
    }
}
export default About;