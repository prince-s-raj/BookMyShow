import React from "react";

const Poster = (props) =>{
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

export default Poster;