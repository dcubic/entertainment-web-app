import { useParams } from "react-router-dom";
import data from '../../../assets/thumbnails/data.json';

import { ChangeEvent, useState } from "react";
import SearchBar from "../../searchbar/SearchBar";
import MediaList from '../../medialist/MediaList.tsx';

enum MediaType {
  movies = "movies",
  series = "series",
}

// Maybe just filter on pull from the server to prevent re-executions of the filter function?
// probably doesn't matter in this case

function SpecificMediaPage() {
  const [searchString, setSearchString] = useState("");

  const { type } = useParams<{ type: MediaType }>();
  const requiredCategory = type === MediaType.movies ? "Movie" : "TV Series";
  const relevantMedia = data.filter(
    (media) => media.category === requiredCategory
  );
  const nameString = type === MediaType.movies ? "movies" : "TV Series";

  function handleSearchBarUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  }

  return (
    <div>
      <SearchBar
        nameString={nameString}
        searchString={searchString}
        handleSearchBarUpdate={handleSearchBarUpdate}
      />
      <MediaList title={'Pizza'} />
    </div>
  );
}

export default SpecificMediaPage;
