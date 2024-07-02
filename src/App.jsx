import React from "react";
import Navbar from "./assets/Navbar";
import Hero from "./assets/hero";
import './App.css'
import Phones from "./assets/Phones";
import Review from "./assets/reviews/review";
import { Footer } from "./assets/footer";
import Fashion from "./fashion/fashion";



export default function App() {

  return (
   
    <div className="overflow-hidden w-full flex flex-col justify-center items-center">
      

      <Navbar/>
      <Hero/>
      <Phones/>
      <Fashion/>
      <Review/>
      <Footer/>
   

  </div>

  )
  
}

