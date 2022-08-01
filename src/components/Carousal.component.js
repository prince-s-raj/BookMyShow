import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import axios from "axios";
import "../index.css";

//Import CSS file 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Arrows.components";

const Carousal = () =>{

    const [images, setImages] = useState([]);

    useEffect(() => {
        const requestnowPlayingMovies = async() => {
            const getImages = await axios.get("/movie/now_playing");
            setImages(getImages.data.results);
        };
        requestnowPlayingMovies();
    },[]);

    const settings = {
        centerMode: true,
        arrows: true,
        centerPadding: "150px",
    
        dots: true,
        Infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow/>,
        nextArrow: <NextArrow/>
      };

      return(
          <>
                <Slider {...settings}>
                    {images.map((image) =>(
                    <div className="w-full h-380 px-2 py-3">
                        <img src={`https://images.tmdb.org/t/p/original${image.backdrop_path}`} className="w-full h-full rounded-md" alt="Images"/>
                    </div>
                    ))}
                </Slider>
          </>
      );
}

export default Carousal;