import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import axios from "axios";
import "../index.css";

//Import CSS file 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Description = (props) =>{
    return(
        <>
            <div className = "px-1">
                <div className="h-80">
                    <img src = {`https://images.tmdb.org/t/p/original${props.backdrop_path}`} className = "w-full h-full rounded-xl" />
                </div>
                <h3 
                    className={`text-lg  ${
                    props.isDark ? "text-black" : "text-gray-800"
                    }`} 
                >
                    {props.original_title}
                </h3>
                <p 
                    className={`text-lg ${
                    props.isDark ? "text-black" : "text-gray-700"
                    }`} 
                >
                    {props.original_language}
                </p>
            </div>
        </>
    )   
}


const CardTwo = () =>{

    const [ Latest, setLatest ] = useState([]);

    useEffect(() => {
        const requestLatest = async() => {
            const getLatest = await axios.get("/movie/top_rated");
            setLatest(getLatest.data.results);
        };
        requestLatest();
    },[]);

    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide:0
    };

      return(
          <>
            <Slider {...settings}>
                {Latest.map((image) =>(
                    <div className="w-full h-380 px-2 py-3">
                        <Description {...image} isDark />
                    </div>
                ))}
            </Slider>     
          </>
      );
}

export default CardTwo;