import styles from "./MediaList.module.css";
import visualContainerStyles from "../sharedcss/VisualContainer.module.css";
import { MediaObject } from "../../assets/thumbnails/MediaObject";
import PlayIcon from "../../assets/icons/icon-play.svg?react";
import DisplayedMediaInfo from "../displayedmediainfo/DisplayedMediaInfo";
import Bookmark from "../bookmark/Bookmark";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import { MOBILE_TABLET_WIDTH_THRESHOLD, TABLET_DESKTOP_WIDTH_THRESHOLD } from "../../utils/constants";

interface MediaListProps {
  title: string;
  data: MediaObject[];
  isBookmarked: (title: string) => boolean,
  toggleBookmark: (title: string) => void
}

function MediaList({ title, data, isBookmarked, toggleBookmark }: MediaListProps) {
  const windowDimensions = useWindowDimensions();

  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.gridContainer}>
        {data.map((media, index) => (
          <div key={index} className={visualContainerStyles.mediaContainer}>
            <div className={visualContainerStyles.visualContainer}>
              <img
                src={
                  windowDimensions.width < MOBILE_TABLET_WIDTH_THRESHOLD
                    ? media.thumbnail.regular.small
                    : windowDimensions.width < TABLET_DESKTOP_WIDTH_THRESHOLD 
                      ? media.thumbnail.regular.medium
                      : media.thumbnail.regular.large
                }
                className={visualContainerStyles.thumbnail}
              />
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
