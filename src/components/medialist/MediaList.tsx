import styles from "./MediaList.module.css";
import visualContainerStyles from "../sharedcss/VisualContainer.module.css";
import { MediaObject } from "../../assets/thumbnails/MediaObject";
import PlayIcon from "../../assets/icons/icon-play.svg?react";
import DisplayedMediaInfo from "../displayedmediainfo/DisplayedMediaInfo";
import Bookmark from "../bookmark/Bookmark";
import { useBookmarkManager } from "../../hooks/useBookmarkManager";

interface MediaListProps {
  title: string;
  data: MediaObject[];
  includeOnlyBookmarked: boolean;
}

function MediaList({ title, data, includeOnlyBookmarked }: MediaListProps) {
  const { isBookmarked, toggleBookmark } = useBookmarkManager();

  const filteredData = data.filter((media) => includeOnlyBookmarked ? isBookmarked(media.title) : true )

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.gridContainer}>
        {filteredData.map((media, index) => (
          <div key={index} className={visualContainerStyles.mediaContainer}>
            <div className={visualContainerStyles.visualContainer}>
              <img
                src={media.thumbnail.regular.small}
                className={visualContainerStyles.thumbnail}
              />{" "}
              {/* Will have to modify this to accomodate size variants */}
              <Bookmark
                key={media.title}
                isBookmarked={() => isBookmarked(media.title)}
                toggleBookmark={() => toggleBookmark(media.title)}
              />
              <div className={visualContainerStyles.playContainer}>
                <PlayIcon className={visualContainerStyles.playIcon} />
                <p className={visualContainerStyles.playText}>Play</p>
              </div>
            </div>
            <DisplayedMediaInfo media={media} isWithin={false} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaList;
