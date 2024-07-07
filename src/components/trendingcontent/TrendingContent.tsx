import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickOverrides.css";

import { MediaObject } from "../../assets/thumbnails/MediaObject";
import DisplayedMediaInfo from "../displayedmediainfo/DisplayedMediaInfo";
import PlayIcon from "../../assets/icons/icon-play.svg?react";
import visualContainerStyles from "../sharedcss/VisualContainer.module.css";
import styles from "./TrendingContent.module.css";
import Slider, { Settings } from "react-slick";
import Bookmark from "../bookmark/Bookmark";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";
import {
  MOBILE_SLIDE_COUNT,
  MOBILE_TABLET_WIDTH_THRESHOLD,
  TABLET_SLIDE_COUNT,
} from "../../utils/constants";

interface TrendingContentProps {
  data: MediaObject[];
  isBookmarked: (title: string) => boolean;
  toggleBookmark: (title: string) => void;
}

function TrendingContent({ data, isBookmarked, toggleBookmark }: TrendingContentProps) {
  const windowDimensions = useWindowDimensions();

  const sliderSettings: Settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow:
      windowDimensions.width < MOBILE_TABLET_WIDTH_THRESHOLD
        ? MOBILE_SLIDE_COUNT
        : TABLET_SLIDE_COUNT,
    slidesToScroll: 1,
    speed: 500,
    vertical: false,
    variableWidth: false,
    arrows: false,
  };

  return (
    <div className={styles.trendingContainer}>
      <h1 className={styles.title}>Trending</h1>
      <Slider {...sliderSettings}>
        {data.map((media, index) => (
          <div key={index} className={visualContainerStyles.visualContainer}>
            <img
              src={
                windowDimensions.width < MOBILE_TABLET_WIDTH_THRESHOLD
                  ? media.thumbnail.trending.small
                  : media.thumbnail.trending.large
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
            <DisplayedMediaInfo media={media} isWithin={true} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TrendingContent;
