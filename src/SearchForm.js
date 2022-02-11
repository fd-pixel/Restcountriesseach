import React, { useState } from "react";

const SearchForm = (props) => {
  return (
    <form>
      <input
        name="search"
        placeholder="search country"
        value={props.search}
        onChange={props.onSearchChange}
      />
    </form>
  );
};
export default SearchForm;
