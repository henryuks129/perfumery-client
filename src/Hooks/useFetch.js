import React, {useState,useEffect} from 'react';

const useFetch = (url) => {
const [data,setData] = useState([]);
const [loading,setLoading] = useState(false);
const [error,setError] = useState(null);
let fetchedData = async ()=>{
    try{
        setLoading(true);
        let fetchResult = await fetch(url);
        let response = await fetchResult.json();
        setData(response);
        console.log(response);
    }catch(error){
        // console.log(error);
    }finally{
        setLoading(false);
    }
}
useEffect(()=>{
    fetchedData()
},[url])
  return {data,loading,error}
}

export default useFetch