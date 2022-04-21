import React from "react";
import { useNavigate } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import tmdbApi, { category } from "../../api/tmdbApi";
import Button from "../button/Button";
import OutlineButton from "../button/OutlineButton";

import "./heroSlide.scss";

const HeroSlideItem = (props) => {
  let navigate = useNavigate();
  const { className } = props;

  const { id, title, overview, backdrop_path, poster_path } = props.item;

  const background = apiConfig.originalImage(
    backdrop_path ? backdrop_path : poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${id}`);

    const videos = await tmdbApi.getVideos(category.movie, id);

    if (videos.results.length > 0) {
      const videoSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videoSrc);

      console.log("class modal: ", modal);
    } else {
      modal.querySelector(".modal_content").innerHTML = "No trailer!";
    }
    //gan class active vao component modal
    modal.classList.toggle("active");
  };

  const handleOnClickButton = () => {
    navigate("/movie/" + id);
  };

  return (
    <div
      className={`hero-slide__item ${className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{title}</h2>
          <div className="overview">{overview}</div>
          <div className="btns">
            <Button onClick={handleOnClickButton}>watch now</Button>
            <OutlineButton onClick={setModalActive}>
              watch trailer
            </OutlineButton>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSlideItem;
