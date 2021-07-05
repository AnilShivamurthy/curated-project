import React from "react";
import { setSearchInputValue} from "../Redux/Action/Action";
import { useDispatch } from "react-redux";
import "./SearchBar.css";

  const SearchBar = ({handlePhotoSearchResponse, handleVideoSearchResponse}) => {
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    dispatch(setSearchInputValue(e.target.value));
  };

  const handleSearch = () => {
    handlePhotoSearchResponse();
    handleVideoSearchResponse();
  };

  return (
    <div className="searchbar">
      <div className="search-content">
        <input
          className="searchitems"
          type="text"
          placeholder="Search"
          onChange={(e) => handleChange(e)}
        />
        <button className="searchButton" type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
