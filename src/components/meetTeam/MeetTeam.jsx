import "./meetTeam.css"
import "animate.css"
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle} from "mdb-react-ui-kit";

export default function MeetTeam(){
    return(
        <>
            <div className="teamWrapper">
                <span className="team-heading">MEET THE TEAM</span>
                <div className="team">
                    <MDBCard className="cardStyle">
                        <MDBCardImage  src="assets/people/david.jpg" className="cardImage" position="top" />
                        <MDBCardBody className="cardBody">
                            <MDBCardTitle className="cardTitle">David Eagles</MDBCardTitle>
                            <MDBCardText className="cardText">Developer | UI/UX Design</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="cardStyle">
                        <MDBCardImage  src="assets/people/tiamh.jpg" className="cardImage" position="top" />
                        <MDBCardBody className="cardBody">
                            <MDBCardTitle className="cardTitle">Tiam Lyn</MDBCardTitle>
                            <MDBCardText className="cardText">UI/UX Design</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="cardStyle">
                        <MDBCardImage  src="assets/people/arasen.jpg" className="cardImage" position="top" />
                        <MDBCardBody className="cardBody">
                            <MDBCardTitle className="cardTitle">Arasen Parmanum</MDBCardTitle>
                            <MDBCardText className="cardText">Developer</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="cardStyle">
                        <MDBCardImage  src="assets/people/rokia.jpg" className="cardImage" position="top" />
                        <MDBCardBody className="cardBody">
                            <MDBCardTitle className="cardTitle">Nancy Rokia</MDBCardTitle>
                            <MDBCardText className="cardText">UI/UX Design</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="cardStyle">
                        <MDBCardImage  src="assets/people/p234.jpg" className="cardImage" position="top" />
                        <MDBCardBody className="cardBody">
                            <MDBCardTitle className="cardTitle">Regnald Okoko</MDBCardTitle>
                            <MDBCardText className="cardText">UI/UX Design</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    <MDBCard className="cardStyle">
                        <MDBCardImage  src="assets/people/p3.jpg" className="cardImage" position="top" />
                        <MDBCardBody className="cardBody">
                            <MDBCardTitle className="cardTitle">Amos Kasumba</MDBCardTitle>
                            <MDBCardText className="cardText">Software Tester & Product Review</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </>
    )

}