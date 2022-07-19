import React from "react";
import "./team.css"
import {MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBRow} from "mdb-react-ui-kit";

export default function Team(){
    return(
        <>
        <div className="teamWrapper">
            <MDBRow className="">
                <MDBCol className="">
                    <MDBCard className="rounded">
                        <MDBCardImage src="assets/people/david.jpg" className=" team-img"/>
                        <MDBCardBody className="">
                            <MDBCardTitle className="">David Eagles</MDBCardTitle>
                            <MDBCardText className="">Software Engineer | UI/UX Design</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="">
                    <MDBCard className="">
                        <MDBCardImage src="assets/people/p13.jpg" className=" team-img"/>
                        <MDBCardBody className="">
                            <MDBCardTitle className="">DTapiwa Weary</MDBCardTitle>
                            <MDBCardText className="">Software Engineer</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>

                <MDBCol className="">
                    <MDBCard className="">
                        <MDBCardImage src="assets/people/p8.jpg" className=" team-img"/>
                        <MDBCardBody className="">
                            <MDBCardTitle className="">Matthew Hanson</MDBCardTitle>
                            <MDBCardText className="">Software Engineer</MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>



            </MDBRow>
        </div>
        </>
    )
}