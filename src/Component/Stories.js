// API FETCHING

import React,{useEffect}from"react";

const Store = () =>{
  let isLoading = true;

  let API ="http://hn.algolia.com/api/v1/search?query=html";
  const fetchApiData = async(url)=>{
    try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        // isLoading=false;
    }
    catch(error){
        console.log(error);
    }

  }
}
const Stories =()=>{
    return(
        <>
          <h2>Post</h2>
        </>
    )
}
 export default Stories;





