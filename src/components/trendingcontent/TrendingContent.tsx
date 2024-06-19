import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slickOverrides.css';

import { MediaObject } from "../../assets/thumbnails/MediaObject";
import DisplayedMediaInfo from "../displayedmediainfo/DisplayedMediaInfo";
import BookmarkIcon from "../../assets/icons/icon-bookmark-empty.svg?react";
import PlayIcon from "../../assets/icons/icon-play.svg?react";
import visualContainerStyles from '../sharedcss/VisualContainer.module.css';
import styles from "./TrendingContent.module.css";
import Slider, { Settings } from 'react-slick';

interface TrendingContentProps {
  data: MediaObject[];
}

const sliderSettings: Settings = {
  focusOnSelect: true,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,
  vertical: false,
  variableWidth: false,
  arrows: false
}

// Focus on Select react-slick
function TrendingContent({ data }: TrendingContentProps) {
  return (
    <div className={styles.trendingContainer}>
      <h1 className={styles.title}>Trending</h1>
      <Slider {...sliderSettings}>
        {data.map((media, index) => (
          <div key={index} className={visualContainerStyles.visualContainer}>
            <img
              src={media.thumbnail.trending.small}
              className={visualContainerStyles.thumbnail}
            />
            <div className={visualContainerStyles.bookmarkContainer}>
              <BookmarkIcon className={visualContainerStyles.bookmarkIcon} />
            </div>
            <div className={visualContainerStyles.playContainer}>
              <PlayIcon className={visualContainerStyles.playIcon} />
              <p className={visualContainerStyles.playText}>Play</p>
            </div>
            <DisplayedMediaInfo media={media} isWithin={true}/>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingContent;
