import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import movieTrailer from "movie-trailer";
import { useStateValue } from "../component/StateProvider";
import { actionTypes } from "../component/reducer";
const url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [{ user }, dispatch] = useStateValue();
  const [movie, setMovie] = useState([]);
  const [teaser, setTeaser] = useState("");
  const [data, setData] = useState("");
  const [poster, setPoster] = useState("");
  const [trailerUrl, setUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data);
      setMovie(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  //youtube
  const opts = {
    playerVars: {
      autoplay: 1,
    },
  };

  const hello = () => {
    setTeaser(true);
  };

  const empty = () => {
    setUrl("");
    setTeaser("")
    setData("");
    console.log("hjkhjl");
  };

  const handleClick = (movies) => {
    if (trailerUrl) {
      setUrl("");
      setTeaser("")
    } else if (data) {
      setPoster(movies);
      setTeaser("")
      setData("");
    } else {
      console.log(movies?.title);
      setPoster(movies);
      movieTrailer(movies?.title || movies?.original_name || movies?.name)
        .then((res) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: res,
          });
          setUrl(res);
          console.log(res);
        })
        .catch((e) => {
          setData("No Trailer Found");
        });
    }
  };

  console.log(data);

  return (
    <div>
      <h2 style={{fontSize:"30px",fontWeight:"bold"}}> {title} </h2>
      <div className="row">
        {movie.map((movies) => (
          <img
            key={movies.id}
            onClick={() => handleClick(movies)}
            className="rows"
            style={{
              width: "140px",
              marginRight: "10px",
            }}
            src={`${url}${movies.poster_path}`}
            alt={movies.poster_path}
          />
        ))}
      </div>
      {trailerUrl && (
        <div>
          <div style={{display:"flex",flexDirection:"row"}}>
            <button
              onClick={() => empty()}
              style={{
                padding: "10px",
                borderRadius: "50px",
                marginLeft: "10px",
                border: "none",
                outlineWidth: "0",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "red",
              }}
            >
              X
            </button>
            <p style={{ color: "grey", marginLeft: "8px", marginTop: "3px" }}>
              Close
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "20px",flex:"1",flexWrap:"wrap" }}>
            <img
              src={`${url}${poster.poster_path}`}
              style={{
                width: "200px",
                height: "300px",
              }}
            />
            <div style={{ padding: "40px"}}>
              <h2 style={{fontSize:"30px"}}>{poster?.title || poster?.original_name || poster?.name}</h2>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "yellow",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "5px",
                }}
              >{`IMDb ${poster?.vote_average}`}</button>
              <button
                onClick={() => hello()}
                style={{
                  padding: "10px",
                  backgroundColor: "blue",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "8px",
                  borderRadius: "5px",
                }}
              >
                Watch Tralier
              </button>
              <h4>Overview</h4>
              <p style={{ color: "grey" }}>{poster?.overview}</p>
            </div>
          </div>
          {teaser && (
            <iframe
              height="390"
              width="100%"
              src={`https://www.youtube.com/embed/${trailerUrl.replace(
                "https://www.youtube.com/watch?v=",
                ""
              )}`}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          )}
        </div>
      )}
      {data && (
        <div>
          <div style={{display:"flex"}}>
            <button
              onClick={() => empty()}
              style={{
                padding: "10px",
                borderRadius: "50px",
                marginLeft: "10px",
                border: "none",
                outlineWidth: "0",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "red",
              }}
            >
              X
            </button>
            <p style={{ color: "grey", marginLeft: "8px", marginTop: "3px" }}>
              Close
            </p>
          </div>
          <div style={{ display: "flex", marginTop: "20px",flex:"1",flexWrap:"wrap" }}>
            <img
              src={`${url}${poster.poster_path}`}
              style={{
                width: "300px",
                height: "400px",
              }}
            />
            <div style={{ padding: "40px" }}>
              <h2 style={{fontSize:"30px"}}>{poster?.title || poster?.original_name || poster?.name}</h2>
              <button
                style={{
                  padding: "10px",
                  backgroundColor: "yellow",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "5px",
                }}
              >{`IMDb ${poster?.vote_average}`}</button>
              <button
                onClick={() => hello()}
                style={{
                  padding: "10px",
                  backgroundColor: "blue",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  marginLeft: "8px",
                  borderRadius: "5px",
                }}
              >
                Watch Tralier
              </button>
              <h4 style={{fontSize:"30px"}}>Overview</h4>
              <p style={{ color: "grey" }}>{poster?.overview}</p>
            </div>
          </div>
          {
            teaser&&(
              <div>
                <iframe
            height="390"
            width="100%"
            src="https://image.freepik.com/free-vector/error-with-glitch-effect-screen-error-404-page-found_143407-1.jpg"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
                </div>
            )
          }
        </div>
      )}
    </div>
  );
}

export default Row;
