import React from "react";
import Slider from "react-slick";

export const MainCardSlider = (props) =>{
    return(
        <>
            <div className = "px-1">
                <div className="h-80">
                    <img src = {`https://images.tmdb.org/t/p/original${props.backdrop_path}`} className = "w-full h-full rounded-xl" />
                </div>
                <h3 
                    className={`text-lg  ${
                    props.isDark ? "text-white" : "text-gray-800"
                    }`} 
                >
                    {props.original_title}
                </h3>
                <p 
                    className={`text-lg font-bold ${
                    props.isDark ? "text-white" : "text-gray-700"
                    }`} 
                >
                    {props.original_language}
                </p>
            </div>
    </>
    )   
}

const Card = (props) =>{
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
                {props.Images.map((image) => (
                <div className="w-20 h-80 py-3">
                    <MainCardSlider {...image} isDark />
                </div>
                ))}
            </Slider>
        </>
    )
}

export default Card;