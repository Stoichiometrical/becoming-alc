import "./story.css"
import "../storyImages/story"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CancelIcon from '@mui/icons-material/Cancel';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {collapse} from "../storyImages/story";



export default function Story(){
    return(
        <>
            <div className="story" style={{ display: 'none'}} >
                <div className="storyWrapper" id="sto">
                    <CancelIcon id="cancelIcon" sx={{ fontSize:"1.2rem" }} onClick={collapse}/>
                    <a href="#btm"><ArrowDownwardIcon sx={{ fontSize:"2rem" }}  className="icons" /></a>
                    <div className="readWrap">

                        <div className="readTop">
                            <img src="assets/people/david.jpg" className="readImg" alt=""/>
                            <span className="readTitle">David Gondo</span>
                            <div className="readIcons">
                                <FacebookOutlinedIcon className="icons" sx={{ fontSize:"2rem" }}  />
                                <InstagramIcon className="icons" sx={{ fontSize:"2rem" }} />
                                <LinkedInIcon className="icons" sx={{ fontSize:"2rem" }} />
                            </div>
                    </div>
                    </div>
                    <div className="readLength">
                        University is a dream far-fetched if you come from a low-income family, barely making enough to pay for your secondary education. I worked very hard in A-level and passed with brilliant results. Stumbled upon the African Leadership College(ALC) as l was looking for the most innovative spaces to nurture my talent and transform my dreams into goals.

                        I boldly applied and got waitlisted for a full scholarship. Was surprised when the admissions team told me my application was one of the best in the current application pool. I had applied to ALC primarily because of the diversity of the campus and its location, MAURITIUSSSSSSSSS. Honestly, the main reason was the island, l wanted a place far away, where l could establish, have a tropical island lifestyle and do great things.

                        I engaged with resources to familiarize with Mauritius and the ALC culture, and joined the admitted students' WhatsApp group. There, I had  insightful conversations with brilliant leaders. A lot happened between the waiting period and getting to Mauritius because of Covid-19. That was stressful, but manageable. Finally, the school squeezed to get us to Mauritius. For me, this meant staying in Rwanda for 2 weeks before reaching to the island because of some Covid-19 embargoes but in the ups and downs, I made it to ALC.

                        For the past year, ALC has been amazing, it's been full of challenges and glories. I have come to like how diversity is embraced and everyone is allowed to be themselves. Not being utopic, there are always some challenges of bias from countries with a  lot more students. The most challenging part has been academics, getting used to the heavy workload and self-driven learning took a toil on me and most students. Nevertheless, once you learn to manage your time effectively and prioritize your activities, you cope very well. Being part of ALC connects you to a lot of opportunities from the African Leadership Group(ALG). Which you have to be ready for when they come around.

                        To wrap up, l am happy that l came to ALC, and I am enjoying the tropical island vibes while on my way to my dream life. I  could see myself living in Mauritius for the next 10 years, the people here are very nice and there are a lot of cool places to visit. l only wish l had learned French early, but overlay it's been one of the best experiences.

                    </div>
                    <a href="#sto"><ArrowUpwardIcon sx={{ fontSize:"2rem" }}  className="icons"  id="btm"/></a>
                </div>
            </div>
        </>
    )
}

