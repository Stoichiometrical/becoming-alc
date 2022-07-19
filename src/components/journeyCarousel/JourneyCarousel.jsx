import "./journey.css"
import {MDBCarousel, MDBCarouselCaption, MDBCarouselElement, MDBCarouselInner, MDBCarouselItem} from "mdb-react-ui-kit";
import "animate.css"
export default function JourneyCarousel(){
    return(
        <>
            <div className="j-c">
                <div className="carouselWrapper">
                    <MDBCarousel showControls showIndicators={true}  interval={3000} className="carousel" >
                        <MDBCarouselInner className="carouselInner">
                            <MDBCarouselItem className="active">
                                <MDBCarouselElement src="assets/people/n15.jpg" className="carouselImg"/>
                                <MDBCarouselCaption className="startTxt ">
                                    <span className="headerTxt "> WHY ALC?</span>
                                    <button className=" startMore">READ OUR INTERESTING STORIES BELOW</button>
                                    <div className="arrowContainer">
                                        <img src="assets/down.png" className="fingerArrow animate__animated animate__bounceInDown animate__repeat-4	3"/>
                                    </div>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem className="">
                                <MDBCarouselElement src="assets/people/david.jpg" className="carouselImg dav"/>
                                <MDBCarouselCaption className="carouselTxt">
                                    <span className="headerTxt"> DAVID EAGLES</span>
                                    <button className="findMore">For the past year, ALC has been amazing, it's been full of challenges and glories.
                                        I have come to like how diversity is embraced and everyone is allowed to be themselves</button>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem className="">
                                <MDBCarouselElement src="assets/people/p4.jpg" className="carouselImg mike"/>
                                <MDBCarouselCaption className="carouselTxt">
                                    <span className="headerTxt"> MICHEAL TRAVOS</span>
                                    <button className="findMore">I met some of the most prominent leaders in the field through taking courses,
                                        attending seminars and networking through the department.</button>
                                </MDBCarouselCaption>
                                {/*<MDBCarouselCaption className="carouselTxt">ALC is one of the best Universities you can attend</MDBCarouselCaption>*/}
                            </MDBCarouselItem>

                            <MDBCarouselItem className="">
                                <MDBCarouselElement src="assets/people/p12.jpg" className="carouselImg"/>
                                <MDBCarouselCaption className="carouselTxt">
                                    <span className="headerTxt"> BIANCA AMELOZ</span>
                                    <button className="findMore">ALC is one of the best Universities you can attend</button>
                                </MDBCarouselCaption>
                                {/*<MDBCarouselCaption className="carouselTxt">ALC is one of the best Universities you can attend</MDBCarouselCaption>*/}
                            </MDBCarouselItem>

                            <MDBCarouselItem className="">
                                <MDBCarouselElement src="assets/people/tiam.jpg" className="carouselImg "/>
                                <MDBCarouselCaption className="carouselTxt">
                                    <span className="headerTxt"> AUGUSTA TIAM</span>
                                    <button className="findMore"> Though scared of not getting selected, I still went on with my application. My application process was facilitated by
                                        the help of amazing people I had met at ASA. </button>
                                </MDBCarouselCaption>
                                {/*<MDBCarouselCaption className="carouselTxt">ALC is one of the best Universities you can attend</MDBCarouselCaption>*/}
                            </MDBCarouselItem>


                            <MDBCarouselItem className="">
                                <MDBCarouselElement src="assets/people/p6.jpg" className="carouselImg"/>
                                <MDBCarouselCaption className="carouselTxt">
                                    <span className="headerTxt"> MICHE NIKE</span>
                                    <button className="findMore">ALC was central to my dream of experiencing various cultures across Africa</button>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                            <MDBCarouselItem className="">
                                <MDBCarouselElement src="assets/people/arasen.jpg" className="carouselImg"/>
                                <MDBCarouselCaption className="carouselTxt">
                                    <span className="headerTxt"> ARASEN PARMANUM</span>
                                    <button className="findMore">The upcoming months got even better and better since I personally
                                        had the privilege of meeting people from all over Africa</button>
                                </MDBCarouselCaption>
                                {/*<MDBCarouselCaption className="carouselTxt">ALC is one of the best Universities you can attend</MDBCarouselCaption>*/}
                            </MDBCarouselItem>



                        </MDBCarouselInner>
                    </MDBCarousel>
                </div>
            </div>
        </>
    )
}