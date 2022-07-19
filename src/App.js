import React from 'react';
import "animate.css"
import Home from "./pages/home/Homepage";
import Journey from "./pages/journey/Journey";
import About from "./pages/about/About";
import  { BrowserRouter as Router , Route ,Routes} from "react-router-dom";



export default function App(){
    return(
        <>
                <Router basename={process.env.PUBLIC_URL}>
                    <div className="app">
                        <Routes>
                            <Route path="/" element={ <Home/> }>Home</Route>
                            <Route  exact path="/journey" element={ <Journey/> }>Journey</Route>
                            <Route exact path="/about" element={ <About/> }>About</Route>
                        </Routes>
                    </div>
                </Router>


        </>

    )
}