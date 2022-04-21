import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

import tmdbApi, { movieType } from "../../api/tmdbApi";

import "./heroSlide.scss";
import HeroSlideItem from "./HeroSlideItem";
import TrailerModal from "./TrailerModal";

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);

  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = { page: 1 };

      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      setMovieItems(response.results.slice(1, 4));
    };
    getMovies();
  }, []);

  /* isActive - true when current slide is active*/
  return (
    <div className="hero-slide">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
      >
        {movieItems.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <HeroSlideItem
                item={item}
                className={`${isActive ? "active" : ""}`}
              ></HeroSlideItem>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {movieItems.map((item, index) => (
        <TrailerModal key={index} item={item} />
      ))}
    </div>
  );
};

export default HeroSlide;
