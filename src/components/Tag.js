import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


 
const API_KEY  = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
 const [tag ,setTag ] =useState("car");

//  const [gif , setGif] =useState('');
//  const [loading , setLoading] = useState('false');
 
//  async function fetchData(){
//     setLoading(true);
//     const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const {data} = await axios.get(url);
//     const imagesource = data.data.images.downsized_large.url;
//     console.log(imagesource);
//     setGif(imagesource);
//     setLoading(false);
//  } 

//   useEffect( () => {
//     fetchData();
//   } , [])
 
const {gif ,loading , fetchData} = useGif(tag);

  function changeHandler(event){
    setTag(event.target.value);
  }
  return (
    <div className='w-1/2  bg-blue-600 rounded-lg border border-black  flex  flex-col items-center gap-y-5  mt-[15px]'>
      
      <h1 className='mt-[15px] text-xl underline uppercase font-bold'> Random {tag} Gif</h1>

      {
        loading ?  (<Spinner/>): 
        (<img src={gif} width="450px" />)
      }
     
     <input
       className='w-10/12   text-lg py-2 rounded-lg mb-[4px] text-center'
       onChange={changeHandler}
       value={tag}
        placeholder='enter gif you want'>
     </input>

      <button onClick={(tag)=>fetchData()}
      className='bg-yellow-400 w-10/12 text-lg py-2 rounded-lg mb-[15px] '>
        Generate</button>
    </div>
  )
}

export default Tag
