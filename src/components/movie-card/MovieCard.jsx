import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../api/tmdbApi";

import apiConfig from "../../api/apiConfig";

const MovieCard = (props) => {
  const { poster_path, backdrop_path, id, name, title } = props.item;

  const link = "/" + category[props.category] + "/" + id;

  const bg = apiConfig.w500Image(poster_path || backdrop_path);

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play" />
        </Button>
      </div>
      <h3>{title || name}</h3>
    </Link>
  );
};

export default MovieCard;
