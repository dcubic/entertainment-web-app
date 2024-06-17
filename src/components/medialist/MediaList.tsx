import styles from "./MediaList.module.css";
import data from "../../assets/data/data.json";
import EmptyBookmarkIcon from "../../assets/icons/icon-bookmark-empty.svg";
import FullBookmarkIcon from "../../assets/icons/icon-bookmark-full.svg";

interface MediaListProps {
  title: string;
}

function MediaList({ title }: MediaListProps) {
  return (
    <div>
      <h1 className={styles.title}>Title TODO</h1>
      <div className={styles.gridContainer}>
        {data.map((media) => (
          <div>
            <div className={styles.visualContainer}>
              <img />
              <EmptyBookmarkIcon />
              <FullBookmarkIcon />
            </div>
            <div>
              <p>{media.year}</p>
              <div className={styles.dot}/>
              <div>

              </div>
              <p>{}</p>
              <div className={styles.dot}/>
              <p>{media.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaList;
