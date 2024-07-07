import { ChangeEvent, useState } from "react";
import SearchBar from "../../searchbar/SearchBar";
import MediaList from "../../medialist/MediaList";
import styles from "./Page.module.css";
import { InitialData } from "./contentUtils";
import { useOutletContext } from "react-router-dom";

function BookmarksPage() {
  const [searchString, setSearchString] = useState("");
  function handleSearchBarUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  }
  const { mediaData } = useOutletContext() as InitialData;

  const relevantSeries = mediaData.filter(
    (media) =>
      media.category === "TV Series" &&
      (searchString === "" || media.title.search(searchString) !== -1)
  );
  const relevantMovies = mediaData.filter(
    (media) =>
      media.category === "Movie" &&
      (searchString === "" || media.title.search(searchString) !== -1)
  );

  function determineSeriesTitle(): string {
    if (searchString === "") return "Bookmarked TV Series";

    if (relevantSeries.length === 1) {
      return `Found 1 result for \'${searchString}\'`;
    }
    return `Found ${relevantSeries.length} results for \'${searchString}\'`;
  }
  function determineMoviesTitle(): string {
    if (searchString === "") return "Bookmarked Movies";

    if (relevantMovies.length === 1) {
      return `Found 1 result for \'${searchString}\'`;
    }
    return `Found ${relevantMovies.length} results for \'${searchString}\'`;
  }

  return (
    <div className={styles.pageContainer}>
      <SearchBar
        nameString={"bookmarked media"}
        searchString={searchString}
        handleSearchBarUpdate={handleSearchBarUpdate}
      />
      <MediaList title={determineMoviesTitle()} data={relevantMovies} includeOnlyBookmarked={true} />
      <MediaList title={determineSeriesTitle()} data={relevantSeries} includeOnlyBookmarked={true} />
    </div>
  );
}

export default BookmarksPage;
