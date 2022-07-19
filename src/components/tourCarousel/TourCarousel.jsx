import React from 'react';
import {
    MDBCarousel,
    MDBCarouselCaption,
    MDBCarouselElement,
    MDBCarouselInner, MDBCarouselItem
} from 'mdb-react-ui-kit';
import "./tourCarousel.css"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function TourCarousel(){
    return(
        <>
            <div className="start-text">
                <span className="text">ALC MAURITIUS IS AN ECOSYSTEM OF STUDENTS AND PARTNER ORGANIZATIONS BREEDING INNOVATION FOR AFRICA.CHECK OUT SOME COOL GALLERIES OF OUR SYSTEM</span>
            </div>

            <div className="carouselWrapper">
                <MDBCarousel showControls showIndicators className="carousel">
                    <MDBCarouselInner className="carouselInner">
                        <MDBCarouselItem className="active">
                            <MDBCarouselElement  src="assets/places/ba0.jpg" alt="Missing"   className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header first">MAURITIUS TOUR</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/ba2.jpg" alt="Missing"  className="carouselImg"/>
                            <MDBCarouselCaption>
                                <h1 className="c-header">LE MORNE</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/ba12.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">PIETER BOTH MOUNTAIN</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/ba0.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">FLIC EN FLAC BEACH</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/ba5.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">MOUNTAIN VIEW</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/ba11.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">TAMARIN BEACH</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/ba13.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">SEVEN COLOURED EARTH</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                    </MDBCarouselInner>

                </MDBCarousel>
            </div>

            <div className="carouselWrapper">
                <MDBCarousel showControls showIndicators className="carousel">
                    <MDBCarouselInner className="carouselInner">
                        <MDBCarouselItem className="active">
                            <MDBCarouselElement  src="assets/places/rt5.jpg" alt="Missing"   className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header first">OUR COMMUNITY</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/r45.jpg" alt="Missing"  className="carouselImg"/>
                            <MDBCarouselCaption>
                                <h1 className="c-header">FRIENDSHIPS</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/ba7.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">MENTORSHIP AND SUPPORT</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/r24.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">FUN AND BALANCE</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem>
                            <MDBCarouselElement  src="assets/places/h5.jpg" alt="Missing" className="carouselImg" />
                            <MDBCarouselCaption>
                                <h1 className="c-header">SPORTSMANSHIP</h1>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                    </MDBCarouselInner>

                </MDBCarousel>
            </div>

        </>


    )
}