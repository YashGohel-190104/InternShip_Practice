import axios from 'axios';
import  'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
    const [detail, setdetail] = useState({});

    const id = useParams().id;

    const getDetail = async()=>{
        const res = await axios.get("http://www.omdbapi.com/?apikey=db57c3d2&i="+id);
        console.log(res);
        setdetail(res.data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>MOVIE DETAIL - {id}</h1>
        <button onClick={()=>{getDetail()}}>detail</button>
        <h1>COUNTRY {detail?.Country}</h1>
    </div>
  )
}
