import styles from "./MediaList.module.css";
import data from '../../assets/thumbnails/data.json';
import EmptyBookmarkIcon from "../../assets/icons/icon-bookmark-empty.svg?react";
import FullBookmarkIcon from "../../assets/icons/icon-bookmark-full.svg?react";
import PlayIcon from "../../assets/icons/icon-play.svg?react";
import MovieIcon from "../../assets/icons/icon-category-movie.svg?react";
import TvIcon from "../../assets/icons/icon-category-tv.svg?react";

interface MediaListProps {
  title: string;
}

function MediaList({ title }: MediaListProps) {
  return (
    <div>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.gridContainer}>
        {data.map((media) => (
          <div>
            <div className={styles.visualContainer}>
              <img src={media.thumbnail.regular.small} className={styles.thumbnail}/> { /* Will have to modify this to accomodate size variants */ }
              <EmptyBookmarkIcon className={styles.bookmarkIcon}/>
              <FullBookmarkIcon className={styles.bookmarkIcon}/>
              <PlayIcon className={styles.playIcon}/>
            </div>
            <div className={styles.captionContainer}>
              <p className={styles.captionText}>{media.year}</p>
              <div className={styles.dot} />
              <div>
                {media.category === "Movie" ? (
                  <MovieIcon className={styles.categoryIcon} />
                ) : (
                  <TvIcon className={styles.categoryIcon} />
                )}
                <p className={styles.captionText}>{media.category}</p>
              </div>
              <div className={styles.dot} />
              <p className={styles.captionText}>{media.rating}</p>
            </div>
            <p className={styles.mediaTitle}>{media.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaList;
