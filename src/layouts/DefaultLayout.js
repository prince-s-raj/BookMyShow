import React from "react";

//components
import NavBar from "../components/navbarComponents";
import Carousal from "../components/Carousal.component";
import Footer from "../components/Footer";

const DefaultLayout = (props) =>{
    return (
        <div>         
            <NavBar/>
            <Carousal/>
                {props.children}
            <Footer/>
        </div>
    );
};

export default DefaultLayout;