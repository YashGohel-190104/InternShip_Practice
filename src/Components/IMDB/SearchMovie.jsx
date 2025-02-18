import axios from 'axios';
import 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SearchMovie = () => {

    const [moviesData, setmoviesData] = useState([]); 
    const [query, setquery] = useState("");
    const searchMovie = async () => {
        const res = await axios.get("http://www.omdbapi.com/?apikey=db57c3d2&s="+query);
        // const res = await axios.get("http://www.omdbapi.com/?apikey=db57c3d2&s=avatar");
        console.log(res);
        console.log(res.data);
        console.log(res.data.Search);
        setmoviesData(res.data.Search);      
    };

  return (
    <div style={{textAlign:"center"}}>
        <h1>Search Movie</h1>
      <input
        type="text"
        onChange={(event) => {
          setquery(event.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          searchMovie();
        }}
      >
        search
      </button>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-2">
            {moviesData?.map((movie) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="card">
                  <Link to={`/moviedetails/${movie.imdbID}`}>
                    <img src={movie.Poster} className="card-img-top" alt="Image" />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <p className="card-text">{movie.Year}</p>
                    <p className="card-text">{movie.imdbID}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
