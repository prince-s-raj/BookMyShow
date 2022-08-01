import React from "react";
import "../index.css";

export const PrevArrow = (props) =>{
    return(
        <>
            <div
                className = {props.className}
                style = {{...props.style, width:"50px",
                    height: "40px",
                    backgroundColor: "black",
                    borderRadius: "0px 5px 5px 0px",
                    opacity: "0.5",   
                    padding:"10px"
                
                }}
                onClick = {props.onClick}
            ></div> 
        </>
    );
}

export const NextArrow = (props) =>{
    return(
        <>
             <div
                className = {props.className}
                style = {{...props.style, width:"50px",
                    height: "40px",
                    backgroundColor: "black",
                    borderRadius: "5px 0px 0px 5px",
                    opacity: "0.5",   
                    padding:"10px"
                
                }}
                onClick = {props.onClick}
            ></div>
        </>
    );
}

