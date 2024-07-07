import { useOutletContext, useParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import pageStyles from "./Page.module.css";
import SearchBar from "../../searchbar/SearchBar";
import MediaList from "../../medialist/MediaList.tsx";
import { InitialData } from "./contentUtils.ts";
import { useBookmarkManager } from "../../../hooks/useBookmarkManager.ts";

enum MediaType {
  movies = "movies",
  series = "series",
}

function SpecificMediaPage() {
  const { type } = useParams<{ type: MediaType }>();
  const [searchString, setSearchString] = useState("");
  const { isBookmarked, toggleBookmark } = useBookmarkManager();
  const { mediaData } = useOutletContext() as InitialData;

  useEffect(() => {
    setSearchString("");
  }, [type]);
  function handleSearchBarUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  }

  const requiredCategory = type === MediaType.movies ? "Movie" : "TV Series";
  
  const relevantMedia = mediaData.filter(
    (media) =>
      media.category === requiredCategory &&
      (searchString === "" || media.title.search(searchString) !== -1)
  );
  const nameString = type === MediaType.movies ? "movies" : "TV series";

  function determineTitleString(): string {
    if (searchString === "")
      return type === MediaType.movies ? "Movies" : "TV Series";

    if (relevantMedia.length === 1) {
      return `Found 1 result for \'${searchString}\'`;
    }
    return `Found ${relevantMedia.length} results for \'${searchString}\'`;
  }

  return (
    <div className={pageStyles.pageContainer}>
      <SearchBar
        nameString={nameString}
        searchString={searchString}
        handleSearchBarUpdate={handleSearchBarUpdate}
      />
      <MediaList
        title={determineTitleString()}
        data={relevantMedia}
        isBookmarked={isBookmarked}
        toggleBookmark={toggleBookmark}
      />
    </div>
  );
}

export default SpecificMediaPage;
