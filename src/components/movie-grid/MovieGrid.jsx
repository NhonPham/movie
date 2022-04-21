import "./movie-grid.scss";

import MovieCard from "../movie-card/MovieCard";
import MovieSearch from "../movie-grid/MovieSearch";
import OutlineButton from "../button/OutlineButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi, { category, movieType, tvType } from "../../api/tmdbApi";
const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();
  const { categoryGrid } = props;

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (keyword === undefined) {
        const params = {};
        switch (categoryGrid) {
          case category.movie:
            response = await tmdbApi.getMoviesList(movieType.upcoming, {
              params,
            });
            break;
          default:
            response = await tmdbApi.getTvList(tvType.popular, { params });
        }
      } else {
        const params = {
          query: keyword,
        };
        response = await tmdbApi.search(categoryGrid, { params });
      }
      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [categoryGrid, keyword]);

  const loadMore = async () => {
    let response = null;
    if (keyword === undefined) {
      const params = {
        page: page + 1,
      };
      switch (categoryGrid) {
        case category.movie:
          response = await tmdbApi.getMoviesList(movieType.upcoming, {
            params,
          });
          break;
        default:
          response = await tmdbApi.getTvList(tvType.popular, { params });
      }
    } else {
      const params = { page: page + 1, query: keyword };
      response = await tmdbApi.search(categoryGrid, { params });
    }
    console.log("response: ", response.results);
    setItems([...items, ...response.results]);
    setPage(page + 1);
  };

  return (
    <>
      <div className="section mb-3">
        <MovieSearch categoryGrid={categoryGrid} input={keyword} />
      </div>
      <div className="movie-grid">
        {items.map((item, index) => (
          <MovieCard key={index} category={category} item={item} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="movie-grid__loadmore">
          <OutlineButton className="small" onClick={loadMore}>
            Load more
          </OutlineButton>
        </div>
      ) : null}
    </>
  );
};

export default MovieGrid;
