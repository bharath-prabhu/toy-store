//import { ClassNames } from "@emotion/react";
import React from "react";
import ReactCardSlider from "react-card-slider-component";
import "./main.css";
import { Link } from "react-router-dom";
function Navbar() {
  const slides = [
    {
      image: "https://m.media-amazon.com/images/I/61x9JGjs+gL._AC_UL480_FMwebp_QL65_.jpg",
      title: "Red Lambo",
      description: "SUPER TOY Rc High Speed  - Multi Color, Kid❤️❤️. ",
      clickEvent:()=>{
        return(
          <div>
            
          </div>
        )
      }
    },
    {
      image: "https://m.media-amazon.com/images/I/81arfNR+-YL._AC_UL480_FMwebp_QL65_.jpg",
      title: "Mr.Teddy",
      description: "I am Ted.genius guy😉😉",
      clickEvent:()=>{}
    },
    {
      image: "https://m.media-amazon.com/images/I/51HyFX6nkNL._AC_UL480_FMwebp_QL65_.jpg",
      title: "Spinner",
      description: "TRU TOYS Crystal Colorful Transparent . ",
      clickEvent:()=>{}
    },
    {
      image: "https://m.media-amazon.com/images/I/517tM2o269L._AC_UL480_FMwebp_QL65_.jpg",
      title: "Twin buddy",
      description: "a loveable toy and best friend for kids❤️❤️.",
      clickEvent:()=>{}
    },
    {
      image: "https://m.media-amazon.com/images/I/418DCmJZoyL._AC_UL480_QL65_.jpg",
      title: "FAVELA",
      description: "FAVELA® Flashing  Anti-Stress Light Fun Toys👻👻",
      clickEvent:()=>{}
    },
    {
      
      image: "https://m.media-amazon.com/images/I/81Odz46Z02L._AC_UL960_FMwebp_QL65_.jpg",
      title: "Zest speed",
      description: "Monster Truck Rock Crawler🔥🔥 ",
      clickEvent:()=>{}
    },
    {
      image: "https://m.media-amazon.com/images/I/81arfNR+-YL._AC_UL480_FMwebp_QL65_.jpg",
      title: "Mr.Teddy",
      description: "I am Ted.genius guy😉😉",
      clickEvent:()=>{}
    },
    {
      image: "https://m.media-amazon.com/images/I/51Q2PUSnDrL._AC_UL480_QL65_.jpg",
      title: "SOJOURN",
      description: "Flashing Lights Music 360Degree Rotation Bicycle❤️",
      clickEvent:()=>{}
    },
    {
      image: "https://m.media-amazon.com/images/I/71Ecrpbub5L._AC_UL480_FMwebp_QL65_.jpg",
      title: "Blue Transformer",
      description: "SUPER TOY Transform Convertible Robot Car😍😍",
      clickEvent:()=>{}
    }
  ];
  return (
    <div class="ko">
    <>
    <Link to="./Home">
      <ReactCardSlider slides={slides} />
      </Link>
    </>
    </div>
  );
}

export default Navbar;
