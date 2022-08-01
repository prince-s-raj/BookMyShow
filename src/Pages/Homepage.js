import React, {useState, useEffect} from "react";
import axios from "axios"

// Components
import Premier from "../components/Premier.component";
import Card from "../components/MainCardSlider.component";
import CardTwo from "../components/CardTwo";
const HomePage = () =>{
    const [PopularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        const requestPopularMovies = async() =>{
            const getPopularMovies = await axios.get("/movie/popular");
            setPopularMovies(getPopularMovies.data.results);
        };
        requestPopularMovies();
    },[]);
    console.log({PopularMovies});

    return(
        <>
            <div className = "px-10 m-10">
                <CardTwo/>
            </div>

            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Recommended Movies</h1>
                <Card Images = {PopularMovies}/> 
            </div>

            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Recommended Movies</h1>
                <Card Images = {PopularMovies}/> 
            </div>

            <div>
                <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/lead-in-v3-collection-202102040828.png"/>
            </div>

            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">The Best of Entertainment</h1>
                <Card Images = {PopularMovies}/>  
            </div>
            <div className = "bg-gray-800 ">
                <div className = "px-10 m-10" >
                    <Premier Images = {PopularMovies}/>
                </div>
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Events Happening Near You</h1>
                <Card Images = {PopularMovies}/> 
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Online Streaming Events</h1>
                <Card Images = {PopularMovies}/> 
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">OutDoor Events</h1>
                <Card Images = {PopularMovies}/> 
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Laughter Thrapy</h1>
                <Card Images = {PopularMovies}/>  
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Popular Events</h1>
                <Card Images = {PopularMovies}/> 
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">The Latest Plays</h1>
                <Card Images = {PopularMovies}/>  
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Top Games and Sports Events</h1>
                <Card Images = {PopularMovies}/> 
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Trending Searches right Now</h1>
                <Card Images = {PopularMovies}/> 
            </div>
            <div className = "px-10 m-10">
                <h1 className = "text-2xl font-bold text-gray-900 my-3">Explore Fun Activities</h1>
                <Card Images = {PopularMovies}/> 
            </div>
        </>
    )
}
export default HomePage;