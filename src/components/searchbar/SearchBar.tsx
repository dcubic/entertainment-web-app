/// <reference types="vite-plugin-svgr/client" />

import { ChangeEvent } from "react";
import SearchIcon from "../../assets/icons/icon-search.svg?react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  nameString: "TV Series" | "movies";
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
      <SearchIcon className={styles.searchIcon} />
      <input
        placeholder={`Search for ${nameString}`}
        onChange={handleSearchBarUpdate}
        className={styles.searchInput}
        value={searchString}
      />
    </div>
  );
}

export default SearchBar;
