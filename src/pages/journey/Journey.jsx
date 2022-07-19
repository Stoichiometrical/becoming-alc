import "./journey.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Disqus from "../../components/disqus/Disqus";
import JourneyCarousel from "../../components/journeyCarousel/JourneyCarousel";
import StoryImages from "../../components/storyImages/StoryImages";
import Story from "../../components/story/Story";


export default function Journey(){
    return(
        <>
            <Navbar/>
            <JourneyCarousel/>
            <Story/>
            <StoryImages/>
            <Disqus />
            <Footer/>
        </>
    )

}