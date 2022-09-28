import React, { useEffect, useState } from "react";
import axios from "../../axios";
import "./Banner.css";
import { API_KEY, imageUrl } from "../../Constants/Constants";
function Banner() {
  const [Movie, setMovie] = useState([]);
  const index = Movie[Math.floor(Math.random() * Movie.length)]

  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        setMovie(response.data.results);
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${index ? imageUrl + index.backdrop_path : ""})`,
      }}
      className="banner"
    >
      <div className="content">
        <h1 className="title">{index ? index.original_name : ""}</h1>
        <h1 className="title">{index ? index.title : ""}</h1>
        <div className="banner_buttons">
          <button className="buttons ">Play</button>
          <button className="buttons">My List</button>
        </div>
        <h1 className="description">{index ? index.overview : ""}.</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}
export default Banner;
