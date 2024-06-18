import { MediaObject } from "../../assets/thumbnails/MediaObject";
import DisplayedMediaInfo from "../displayedmediainfo/DisplayedMediaInfo";
import BookmarkIcon from "../../assets/icons/icon-bookmark-empty.svg?react";
import PlayIcon from "../../assets/icons/icon-play.svg?react";
import visualContainerStyles from '../sharedcss/VisualContainer.module.css';
import styles from "./TrendingContent.module.css";

interface TrendingContentProps {
  data: MediaObject[];
}

// Focus on Select react-slick
function TrendingContent({ data }: TrendingContentProps) {
  return (
    <div className={styles.trendingContainer}>
      <h1 className={styles.title}>Trending</h1>
      <div className={styles.TODO}>
        {data.map((media, index) => (
          <div key={index} className={visualContainerStyles.mediaContainer}>
            <div className={visualContainerStyles.visualContainer}>
              <img
                src={media.thumbnail.trending.small}
                className={visualContainerStyles.thumbnail}
              />{" "}
              <div className={visualContainerStyles.bookmarkContainer}>
                <BookmarkIcon className={visualContainerStyles.bookmarkIcon} />
              </div>
              <div className={visualContainerStyles.playContainer}>
                <PlayIcon className={visualContainerStyles.playIcon} />
                <p className={visualContainerStyles.playText}>Play</p>
              </div>
              <DisplayedMediaInfo media={media} isWithin={true}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingContent;
