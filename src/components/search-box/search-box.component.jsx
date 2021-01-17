import React from "react";

import "./search-box.styles.css";

const SearchBox = ({ placeHolder, handleChange }) => {
  return (
    <input type="search" placeholder={placeHolder} onChange={handleChange} />
  );
};

export default SearchBox;
