import "./navbar.css"
import "../../pages/home/Homepage"
import "../../pages/journey/Journey"
import "../../pages/about/About"
import  { Link} from "react-router-dom";



export default function Navbar(){
    return(
        <>
            <div className="navBar">
                <div className="navbarWrapper">
                    <div className="img-wrapper">
                        <img src="assets/logo.png" className="img-logo" alt="Missing"/>
                    </div>
                        <ul className="navlist">
                            <li className="navItem" ><Link to="/">Home</Link></li>
                            <li className="navItem" ><Link to="/journey">The Journey</Link></li>
                            <li className="navItem" ><Link to="/about">About Us</Link></li>
                        </ul>
                </div>
            </div>
        </>
    )
}