import React from 'react'
import { useEffect, useState } from 'react'
import axios  from 'axios';
const API_KEY  = process.env.REACT_APP_GIPHY_API_KEY;


const useGif = (tag) => {
    // customhook for minimal non-jsx dtaat in component


 const [gif , setGif] =useState('');
 const [loading , setLoading] = useState('false');
 
const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
 
 async function fetchData(tag){
    setLoading(true);
    
    const {data} = await axios.get(tag ? `${url}&tag=${tag}`:url);
    const imagesource = data.data.images.downsized_large.url;
    console.log(imagesource);
    setGif(imagesource);
    setLoading(false);
 } 

  useEffect( () => {
    fetchData("car");
  } , [])

    return { gif ,loading , fetchData};
}

export default useGif
