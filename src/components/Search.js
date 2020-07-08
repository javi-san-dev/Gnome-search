import React from "react";
import PropTypes from "prop-types";
import "./Search.css";

const Search = (props) => {
  const { value, setValue } = props;

  const inputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="search-component" data-test="searchComponent">
      <img
        src={require(`../static/search.png`)}
        className="header-search-image"
        alt="img"
      />
      <input
        className="header-search-input"
        data-test="searchInput"
        placeholder="Search by name"
        name="search"
        value={value}
        onChange={(e) => inputHandler(e)}
      />
    </div>
  );
};

Search.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Search;
