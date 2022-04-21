import React, { useEffect, useState } from "react";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import { useParams } from "react-router-dom";

import "./detail.scss";

const CastList = (props) => {
  const { id } = props;
  const { category } = useParams();
  const [cats, setCast] = useState([]);

  useEffect(() => {
    const getCredits = async () => {
      const response = await tmdbApi.credits(category, id);
      setCast(response.cast.slice(0, 5));
    };
    getCredits();
  }, [category, id]);

  return (
    <div className="casts">
      {cats.map((item, index) => (
        <div className="casts__item" key={index}>
          <div
            className="casts__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
            }}
          ></div>
          <p className="casts__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CastList;
