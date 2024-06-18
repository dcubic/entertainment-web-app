import styles from "./MediaList.module.css";
import visualContainerStyles from '../sharedcss/VisualContainer.module.css';
import { MediaObject } from '../../assets/thumbnails/MediaObject';
import BookmarkIcon from "../../assets/icons/icon-bookmark-empty.svg?react";
import PlayIcon from "../../assets/icons/icon-play.svg?react";
import DisplayedMediaInfo from "../displayedmediainfo/DisplayedMediaInfo";

interface MediaListProps {
  title: string,
  data: MediaObject[]
}

function MediaList({ title, data }: MediaListProps) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.gridContainer}>
        {data.map((media, index) => (
          <div key={index} className={visualContainerStyles.mediaContainer}>
            <div className={visualContainerStyles.visualContainer}>
              <img src={media.thumbnail.regular.small} className={visualContainerStyles.thumbnail} /> { /* Will have to modify this to accomodate size variants */ }
              <div className={visualContainerStyles.bookmarkContainer}>
                <BookmarkIcon className={visualContainerStyles.bookmarkIcon}/>
              </div>
              <div className={visualContainerStyles.playContainer}>
                <PlayIcon className={visualContainerStyles.playIcon}/>
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
