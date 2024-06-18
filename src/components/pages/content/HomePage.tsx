import { ChangeEvent, useState } from "react";
import SearchBar from "../../searchbar/SearchBar";
import MediaList from "../../medialist/MediaList";
import TrendingContent from '../../trendingcontent/TrendingContent';
import jsonData from "../../../assets/thumbnails/data.json";
import { MediaObject } from "../../../assets/thumbnails/MediaObject";

// TODO extend Searchable class that has both state and handleSearchBarUpdate
function HomePage() {
  const [searchString, setSearchString] = useState("");

  function handleSearchBarUpdate(event: ChangeEvent<HTMLInputElement>) {
    setSearchString(event.target.value);
  }

  const data = jsonData as MediaObject[];
  const relevantMedia = data.filter(
    (media) => searchString === "" || media.title.search(searchString) !== -1
  );

  const trendingMedia = data.filter((media) => media.isTrending);

  function determineTitleString(): string {
    if (searchString === '') return 'Recommended for you';

    return `Found ${relevantMedia.length} results for \'${searchString}\'`;
  }
  const nameString = "movies or TV series";
  return (
    <div>
      <SearchBar
        nameString={nameString}
        searchString={searchString}
        handleSearchBarUpdate={handleSearchBarUpdate}
      />
      <TrendingContent data={trendingMedia} />
      <MediaList title={determineTitleString()} data={relevantMedia} />
    </div>
  );
}

export default HomePage;
