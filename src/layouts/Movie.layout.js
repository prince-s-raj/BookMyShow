import React from "react";
import Footer from "../components/Footer";

//components
import NavBar from "../components/navbarComponents";

const MovieLayout = (props) =>{
    return (
        <div>     
            <NavBar/>    
            
                {props.children}
            <Footer/>
        </div>
    );
};

export default MovieLayout;