import React, { useEffect, useState } from "react";
import "./banner.css";
import axios from "./axios";
import request from "./request";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function Header() {
      const result = await axios.get(request.fetchNetflix);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length)
        ]
      );
      return result;
    }
    Header();
  }, []);

  console.log(movie);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        https://image.tmdb.org/t/p/original/${movie?.backdrop_path}
      )`,
        backgroundPosition: "center",
      }}
    >
      <div className="title">
        <h1 style={{fontSize:"30px",fontWeight:"bold"}}>{movie?.title || movie?.original_name || movie?.name}</h1>
      </div>
      <div className="btnq">
        <button
          className="btna"
          style={{
            marginRight: "10px",
            backgroundColor: "#bbb5c3",
            width: "80px",
            border: "none",
            height: "25px",
            cursor: "pointer",
          }}
        >
          Play
        </button>

        <button
          className="btns"
          style={{
            backgroundColor: "#bbb5c3",
            width: "80px",
            height: "25px",
            border: "none",
            cursor: "pointer",
          }}
        >
          My List
        </button>
      </div>
      <div className="des">
        <p>{movie?.overview}</p>
      </div>
    </header>
  );
}

export default Banner;
