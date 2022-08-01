import {Route} from "react-router-dom";
import axios from "axios";
//Components
import DefaultHOC from "./HOC/Default.hoc";
import MovieHOC from "./HOC/Movie.HOC";

//Pages
import HomePage from "./Pages/Homepage";
import Movie from "./Pages/Movie.pages";

//axios default setting
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;



function App() {
  return (
    <>
      
        <DefaultHOC path = "/" exact component = {HomePage}/>
        <MovieHOC path = "/movie/:id" exact component = {Movie}/> 
    </>
  );
}

export default App;
