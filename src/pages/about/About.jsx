import "./about.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import JourneyCarousel from "../../components/journeyCarousel/JourneyCarousel";
import AboutCarousel from "../../components/aboutCarousel/AboutCarousel";
import ContactForm from "../../components/contactForm/ContactForm";

export default function About(){
    return(
        <>
            <Navbar/>
            <AboutCarousel/>
            <ContactForm/>
            <Footer/>
        </>
    )
}