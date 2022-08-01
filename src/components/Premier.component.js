import React from "react";
import Slider from "react-slick";

//Components
import Poster from "./Poster.component"

const Premier = (props) =>{

    const settings = {
        infinity: true,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        InitialSlide:0
    };

    return(
        <>
            <div className = "w-full px-40 mx-auto">
                <img
                    src = "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-rupay-banner-web-collection-202104230555.png" 
                    className = "w-full h-full" 
                    alt = "Premier rupay" 
                />
            </div>
            <div className = "flex flex-col items-start gap-1">  
                <h3 className = "text-white text-xl font-bold">Premieres</h3>
                <p className = "text-white text-sm">Brand New releases every friday</p>
            </div>
            <Slider {...settings}>
                {props.Images.map((image) => (
                    <div className="w-20 h-80 py-3">
                        <Poster {...image} isDark />
                    </div>
                ))}
            </Slider>
        </>
    )
}

export default Premier;