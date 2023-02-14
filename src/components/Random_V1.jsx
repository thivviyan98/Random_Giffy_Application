import React, { useState, useEffect } from 'react';
import axios from 'axios';
// API key
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
    const [gif, setGif] = useState('');
    const fetchGif = async () => {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${'sd8cSIbJs4yJQsCwO3ydUMWU2YyY31D2'}`;
        const { data } = await axios.get(url);
        const imageSrc = data.data.images.downsized_large.url;
        
        setGif(imageSrc);
     }


    useEffect(() => {
        fetchGif();
    }, []);

    const handleClick = () => {
        fetchGif();            
    }
    return(
        <div className='container'>
            <h1>Random GIF</h1>
            <img width="500" src={gif} alt="Random Gif" />
            <button onClick={handleClick}>Click  for New</button>
        </div>
    );
}

export default Random;