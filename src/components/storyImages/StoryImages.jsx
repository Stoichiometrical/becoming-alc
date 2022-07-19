import "./storyImages.css"
import "./story"
import { readDavid, readArasen, readAmos, readNancy, readReggie, readTiam} from "./story";

export default function StoryImages(){
    return(
        <>
            <div className="storiesContainer">
                <div className="storiesWrapper">
                    <div className="first-row">
                        <div className="storyPack sp1">
                            <img src="assets/people/david.jpg" alt="" className="storyImg"/>
                            <span className="storyTitle">DAVID EAGLES</span>
                            <div className="storyOverlay">
                                <span className="storySummary">I loved ALC because it was the best in Africa</span>
                                <span className="readmore" onClick={ readDavid }><a href="#sto">Read More</a></span>
                            </div>
                        </div>
                        <div className="storyPack sp2">
                                <img src="assets/people/tiam.jpg" alt="" className="storyImg"/>
                                <span className="storyTitle">AUGUSTA LYNN</span>
                                <div className="storyOverlay">
                                    <span className="storySummary">I loved ALC because it was the best in Africa</span>
                                    <span className="readmore" onClick={ readTiam }><a href="#sto">Read More</a></span>
                                </div>
                        </div>
                    </div>

                    <div className="second-row">
                        <div className="storyPack sp3">
                            <img src="assets/people/p4.jpg" alt="" className="storyImg"/>
                            <span className="storyTitle">REGNALD OKOKO</span>
                            <div className="storyOverlay">
                                <span className="storySummary">I loved ALC because it was the best in Africa</span>
                                <span className="readmore" onClick={ readReggie } ><a href="#sto">Read More</a></span>
                            </div>
                        </div>
                    </div>

                    <div className="third-row">
                        <div className="storyPack sp4">
                            <img src="assets/people/rokia.jpg" alt="" className="storyImg"/>
                            <span className="storyTitle">NANCY ROKIA</span>
                            <div className="storyOverlay">
                                <span className="storySummary">I loved ALC because it was the best in Africa</span>
                                <span className="readmore" onClick={ readNancy }><a href="#sto">Read More</a></span>
                            </div>
                        </div>
                        <div className="storyPack sp5">
                            <img src="assets/people/arasen.jpg" alt="" className="storyImg"/>
                            <span className="storyTitle">ARASEN PARMANUM</span>
                            <div className="storyOverlay">
                                <span className="storySummary">I loved ALC because it was the best in Africa</span>
                                <span className="readmore" onClick={ readArasen }>Read More</span>
                            </div>
                        </div>
                    </div>

                    <div className="fourth-row">
                        <div className="storyPack sp6">
                            <img src="assets/people/p3.jpg" alt="" className="storyImg"/>
                            <span className="storyTitle">AMOS KASUMBA</span>
                            <div className="storyOverlay">
                                <span className="storySummary">I loved ALC because it was the best in Africa</span>
                                <span className="readmore" onClick={ readAmos }><a href="#sto">Read More</a></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

