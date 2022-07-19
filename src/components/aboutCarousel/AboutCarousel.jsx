import "./about.css"
import {MDBCarousel, MDBCarouselCaption, MDBCarouselElement, MDBCarouselInner, MDBCarouselItem} from "mdb-react-ui-kit";

export default function AboutCarousel(){
    return(
        <>
            <div className="carouselWrapper">
                <MDBCarousel showControls showIndicators={true}  interval={3000} className="carousel" >
                    <MDBCarouselInner className="carouselInner">
                        <MDBCarouselItem className="active">
                            <MDBCarouselElement src="assets/people/ui2.jpg" className="carouselImg "/>
                            <MDBCarouselCaption className="startTxt ">
                                <span className="headerTxt"> OUR TEAM</span>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="">
                            <MDBCarouselElement src="assets/people/davidh.jpg" className="carouselImg st"/>
                            <MDBCarouselCaption className="carouselTxt">
                                <span className="headerTxt"> DAVID EAGLES</span>
                                <button className="findMore">David knows that successful students become successful adults. This is her 15th year at Edison Elementary School and her 10th year teaching fourth grade. So far, fourth grade is her favorite grade to teach! Mrs. Carroll was the 2011 Newell Unified School District Teacher of the Year, and received her National Board Certification in 2013. She loves science and majored in biology at Arizona State University, where she also earned her teaching credential and Master of Education degree.
                                    </button>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="">
                            <MDBCarouselElement src="assets/people/tiam.jpg" className="carouselImg"/>
                            <MDBCarouselCaption className="carouselTxt">
                                <span className="headerTxt"> AUGUSTA TIAM</span>
                                <button className="findMore"> Tiam opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. Melanie has managed projects at TechPoint International, Cyberry, and Induster,
                                    where she was a finalist for the PMI® Project of the Year</button>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="">
                                <MDBCarouselElement src="assets/people/p4.jpg" className="carouselImg"/>
                                <MDBCarouselCaption className="carouselTxt">
                                    <span className="headerTxt"> REGNALD OKOKO</span>
                                    <button className="findMore">Regnald connects online brands to their target audiences for the perfect marketing experience. At the University of California, Davis, Karmen learned the importance of applying classic marketing techniques to modern brand strategies from experts in the field, including her Communications professor, Dr. Martin Mitchell. Recently she finished a research paper on customer conversion
                                        and participated in a group project on improving SEO.</button>
                                </MDBCarouselCaption>
                            </MDBCarouselItem>

                        <MDBCarouselItem className="">
                            <MDBCarouselElement src="assets/people/arasen.jpg" className="carouselImg"/>
                            <MDBCarouselCaption className="carouselTxt">
                                <span className="headerTxt"> ARASEN PARMANUM</span>
                                <button className="findMore">Arasen opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. Melanie has managed projects at TechPoint International, Cyberry, and Induster,
                                    where she was a finalist for the PMI® Project of the Year</button>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="">
                            <MDBCarouselElement src="assets/people/p12.jpg" className="carouselImg"/>
                            <MDBCarouselCaption className="carouselTxt">
                                <span className="headerTxt"> NANCY ROKIA</span>
                                <button className="findMore">ALC is one of the best Universities you can attend</button>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>

                        <MDBCarouselItem className="">
                            <MDBCarouselElement src="assets/people/p234.jpg" className="carouselImg"/>
                            <MDBCarouselCaption className="carouselTxt">
                                <span className="headerTxt">AMOS KASUMBA</span>
                                <button className="findMore">Amos opens the line of communication between clients, customers, and businesses to get projects done. With over 20 years in both public and private sectors, Melanie has experience in management consultation, team building, professional development, strategic implementation, and company collaboration. Melanie has managed projects at TechPoint International, Cyberry, and Induster,
                                    where she was a finalist for the PMI® Project of the Year</button>
                            </MDBCarouselCaption>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </div>
        </>
    )

}