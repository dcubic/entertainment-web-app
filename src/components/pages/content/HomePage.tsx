import { ChangeEvent, useState } from "react";
import SearchBar from "../../searchbar/SearchBar";
import MediaList from "../../medialist/MediaList";
import TrendingContent from '../../trendingcontent/TrendingContent';
import jsonData from "../../../assets/thumbnails/data.json";
import { MediaObject } from "../../../assets/thumbnails/MediaObject";
import styles from './HomePage.module.css';
import pageStyles from './Page.module.css';
import { InitialData } from "./contentUtils";
import { useOutletContext } from "react-router-dom";

// TODO extend Searchable class that has both state and handleSearchBarUpdate
function HomePage() {
  const [searchString, setSearchString] = useState("");
  const { mediaData } = useOutletContext() as InitialData;

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

    if (relevantMedia.length === 1) {
      return `Found 1 result for \'${searchString}\'`;
  }
    return `Found ${relevantMedia.length} results for \'${searchString}\'`;
  }
  const nameString = "movies or TV series";
  return (
    <div className={pageStyles.pageContainer}>
      <SearchBar
        nameString={nameString}
        searchString={searchString}
        handleSearchBarUpdate={handleSearchBarUpdate}
      />
      <div className={styles.contentContainer}>
        <TrendingContent data={trendingMedia} />
        <MediaList title={determineTitleString()} data={relevantMedia} includeOnlyBookmarked={false} />
      </div>
    </div>
  );
}

export default HomePage;
