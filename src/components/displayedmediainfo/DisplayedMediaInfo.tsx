import { MediaObject } from "../../assets/thumbnails/MediaObject";
import MovieIcon from "../../assets/icons/icon-category-movie.svg?react";
import TvIcon from "../../assets/icons/icon-category-tv.svg?react";
import styles from "./DisplayedMediaInfo.module.css";

interface DisplayedMediaInfoProps {
  media: MediaObject;
  isWithin: boolean;
}

function DisplayedMediaInfo({ media, isWithin }: DisplayedMediaInfoProps) {
  return (
    <div className={`${styles.textContainer} ${isWithin ? styles.overlay : ''}`} >
      <div className={styles.captionContainer}>
        <p className={styles.captionText}>{media.year}</p>
        <div className={styles.dot} />
        <div className={styles.categoryContainer}>
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
  );
}

export default DisplayedMediaInfo;
