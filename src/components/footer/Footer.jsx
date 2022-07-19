import "./footer.css"
import {MDBIcon} from "mdb-react-ui-kit";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ConstructionIcon from '@mui/icons-material/Construction';


export default function Footer(){
    return(
        <div className="">
            <div className="footer">
                <div className="footerWrapper">
                    <span className="connect">CONNECT WITH US</span>

                     <div className="footerItems">
                        <div className="footerItem">
                            <LocationOnIcon className="icon" sx={{ fontSize:"2rem" }}/>
                            <span className="">ALC Campus ,Powdermill Road ,Pamplemousses,Mauritius</span>
                        </div>
                        <div className="footerItem">
                            <FacebookOutlinedIcon className="icon" sx={{ fontSize:"2rem" }}/>
                            <InstagramIcon className="icon" sx={{ fontSize:"2rem" }}/>
                            <LinkedInIcon className="icon" sx={{ fontSize:"2rem" }}/>
                            <span className="">GREEN</span>
                        </div>
                        <div className="footerItem">
                            <ConstructionIcon sx={{fontSize:"2rem" }}/>
                            <span className="">WE DO HARD THINGS</span>
                        </div>
                    </div>

                    <span className="copyright" >Copyright &copy; Becoming ALC.All Rights Reserved.All Images Used In This Website Have Been Sourced Under The Pexels Free License</span>
                </div>

            </div>

        </div>
    )
}