import { useState, useEffect } from "react";
import axios from "axios";
import JSONrenderOne from "./jsonRouting/JSONrenderOne";

const FilmAPI = () =>
{
    const [data, setData] = useState("");
    const [apiKey, setApiKey] = useState("");
    const [loaded, setLoaded] = useState(false);
    const [filmTitle, setFilmTitle] = useState("");
    const [error, setError] = useState("");



    const updateApiKey = (e) => {
        e.preventDefault(); 
        setApiKey(e.target.value);
    }


    const makeRequest = (() =>{
        setTimeout(() => {
            console.log(apiKey, filmTitle);
            axios.get("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + filmTitle)
            .then((response) => {
                setLoaded(true);
                setData(response.data);
                console.log(response.data);
            }).catch((error) =>{
                setError(error);
                setLoaded(true);
            })
        },(5000))
    })



    if(data === "")
    {
        return(
            <>
        <h2>FilmRequest.js</h2>
        <p>Enter your API Key for OMDB Here</p>
        <input type="text" onChange={(e)=>updateApiKey(e)} />
        <p>Enter the name of the film you are searching for here</p>
        <input type="text" onChange={(e)=>setFilmTitle(e.target.value)} />
        <p>
            Do not click this button until the fields above are correctly filled
        </p>
        <button onClick={(e) => makeRequest(e)}>Click me</button>
      
        </>
        )
    }

    else
    {

        return(
        <>
        <h2>FilmRequest.js</h2>
        <p>Enter your API Key for OMDB Here</p>
        <input type="text" onChange={(e)=>updateApiKey(e)} />
        <p>Enter the name of the film you are searching for here</p>
        <input type="text" onChange={(e)=>setFilmTitle(e.target.value)} />
        <p>
            Do not click this button until the fields above are correctly filled
        </p>
        <button onClick={(e) => makeRequest(e)}>Click me</button>
      
        {<JSONrenderOne data={data}/>}
        </>
        )

    }




}

export default FilmAPI;