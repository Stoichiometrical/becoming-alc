import React from 'react'
import HomeHero from "../../components/homeHero/HomeHero";
import TourCarousel from "../../components/tourCarousel/TourCarousel";
import MeetTeam from "../../components/meetTeam/MeetTeam";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";


export default function Home(){
    return(
    <>
                     <Navbar/>
                     <HomeHero/>
                     <TourCarousel/>
                     <MeetTeam/>
                     <Footer/>
    </>
    )

}