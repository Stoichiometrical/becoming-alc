import "./homeHero.css"
import {Link} from "react-router-dom";

export default function HomeHero(){
    return(
        <div className="home">
            <div className="imgWrapper">
                <img src="assets/people/p10.jpg" alt="" className="hero-img "/>
            </div>
            <div className="hero-text">
                <span className="title">BECOMING ALC</span>
                <span className="small-title">Ever wondered what it was like getting admitted to the most innovative University in Africa?</span>
                 <button className="find-out"><Link to="/journey">FIND OUT</Link></button>
            </div>
        </div>
    )
}