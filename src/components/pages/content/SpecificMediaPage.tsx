import { useParams } from "react-router-dom";
import jsonData from "../../../assets/thumbnails/data.json";

import { ChangeEvent, useState } from "react";
import SearchBar from "../../searchbar/SearchBar";
import MediaList from "../../medialist/MediaList.tsx";
import { MediaObject } from "../../../assets/thumbnails/MediaObject.ts";

enum MediaType {
  movies = "movies",
  series = "series",
}

function SpecificMediaPage() {
  const [searchString, setSearchString] = useState("");
  function handleSearchBarUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  }

  const { type } = useParams<{ type: MediaType }>();
  const requiredCategory = type === MediaType.movies ? "Movie" : "TV Series";
  const data = jsonData as MediaObject[];
  const relevantMedia = data.filter(
    (media) =>
      media.category === requiredCategory &&
      (searchString === "" || media.title.search(searchString) !== -1)
  );
  const nameString = type === MediaType.movies ? "movies" : "TV series";

  function determineTitleString(): string {
    if (searchString === '') return type === MediaType.movies ? "Movies" : "TV Series";

    if (relevantMedia.length === 1) {
      return `Found 1 result for \'${searchString}\'`
    }
    return `Found ${relevantMedia.length} results for \'${searchString}\'`
  }

  return (
    <div>
      <SearchBar
        nameString={nameString}
        searchString={searchString}
        handleSearchBarUpdate={handleSearchBarUpdate}
      />
      <MediaList title={determineTitleString()} data={relevantMedia}/>
    </div>
  );
}

export default SpecificMediaPage;
