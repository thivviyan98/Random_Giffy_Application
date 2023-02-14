import { useState, useEffect } from 'react';
import axios from 'axios';
// API key
const API_KEY = process.env.REACT_APP_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${'sd8cSIbJs4yJQsCwO3ydUMWU2YyY31D2'}`;

const useGif = (tag) => {
    const [gif, setGif] = useState('');


    const fetchGif = async (tag) => {
        const { data } = await axios.get(tag ? `${url}&tag=${tag}`:url);
        const imageSrc = data.data.images.downsized_large.url;
        
        setGif(imageSrc);
     }


    useEffect(() => {
        fetchGif(tag);
    }, [tag]);

    return { gif, fetchGif }
}

export default useGif;