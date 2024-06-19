import { ChangeEvent, useState } from "react";
import SearchBar from "../../searchbar/SearchBar";
import jsonData from "../../../assets/thumbnails/data.json";
import { MediaObject } from "../../../assets/thumbnails/MediaObject";
import MediaList from "../../medialist/MediaList";

function BookmarksPage() {
  const [searchString, setSearchString] = useState("");
  function handleSearchBarUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  }
  const data = jsonData as MediaObject[];
  const relevantSeries = data.filter(
    (media) =>
        media.category === 'TV Series' &&
      media.isBookmarked &&
      (searchString === "" || media.title.search(searchString) !== -1)
  );
  const relevantMovies = data.filter(
    (media) =>
        media.category === 'Movie' &&
      media.isBookmarked &&
      (searchString === "" || media.title.search(searchString) !== -1)
  );
  function determineSeriesTitle(): string {
    if (searchString === '') return 'Bookmarked TV Series';

    if (relevantSeries.length === 1) {
        return `Found 1 result for \'${searchString}\'`;
    }
    return `Found ${relevantSeries.length} results for \'${searchString}\'`;
  }
  function determineMoviesTitle(): string {
    if (searchString === '') return 'Bookmarked Movies';
    
    if (relevantMovies.length === 1) {
        return `Found 1 result for \'${searchString}\'`;
    }
    return `Found ${relevantMovies.length} results for \'${searchString}\'`;
  }

  return (
    <div>
      <SearchBar
        nameString={"bookmarked media"}
        searchString={searchString}
        handleSearchBarUpdate={handleSearchBarUpdate}
      />
      <MediaList title={determineMoviesTitle()} data={relevantMovies} />
      <MediaList title={determineSeriesTitle()} data={relevantSeries} />
    </div>
  );
}

export default BookmarksPage;
