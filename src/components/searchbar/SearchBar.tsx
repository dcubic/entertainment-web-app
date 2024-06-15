/// <reference types="vite-plugin-svgr/client" />

import { ChangeEvent } from "react";
import SearchIcon from "../../assets/icons/icon-search.svg?react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  nameString: string;
  searchString: string;
  handleSearchBarUpdate: (value: ChangeEvent<HTMLInputElement>) => void;
}

function SearchBar({
  nameString,
  searchString,
  handleSearchBarUpdate,
}: SearchBarProps) {
  return (
    <div className={styles.searchBarContainer}>
      <SearchIcon />
      <input
        placeholder={`Search for ${nameString}`}
        onChange={handleSearchBarUpdate}
        className={styles.searchInput}
      >
        {searchString}
      </input>
    </div>
  );
}

export default SearchBar;
