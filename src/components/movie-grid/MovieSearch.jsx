import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { category } from "../../api/tmdbApi";
import Button from "../button/Button";
import Input from "../input/Input";
import "./movie-grid.scss";

const MovieSearch = (props) => {
  const { categoryGrid, input} = props;
  console.log("input", input);
  const [keyword, setKeyword] = useState(input ? input : "");
  console.log("keyword: ", keyword);
  const navigate = useNavigate();

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${category[categoryGrid]}/search/${keyword}`);
    }
  }, [keyword, categoryGrid, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };

    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch, categoryGrid]);

  return (
    <div className="movie-search">
      <Input
        type="text"
        placeholder="Enter keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button className="small" onClick={goToSearch}>
        Search
      </Button>
      
    </div>
  );
};

export default MovieSearch;
