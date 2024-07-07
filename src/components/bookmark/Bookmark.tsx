import { memo } from "react";
import BookmarkIcon from "../../assets/icons/icon-bookmark-empty.svg?react";
import visualContainerStyles from "../sharedcss/VisualContainer.module.css";

interface BookmarkProps {
  isBookmarked: () => boolean;
  toggleBookmark: () => void;
}

function Bookmark({ isBookmarked, toggleBookmark }: BookmarkProps) {
  const bookmarkedStatus = isBookmarked();
  return (
    <div
      className={visualContainerStyles.bookmarkContainer}
      onClick={toggleBookmark}
      data-status={bookmarkedStatus ? 'active' : 'inactive' }
    >
      <BookmarkIcon
        className={`${visualContainerStyles.bookmarkIcon} ${
          bookmarkedStatus
            ? visualContainerStyles.activeBookmark
            : visualContainerStyles.inactiveBookmark
        }`}
      />
    </div>
  );
}

const MemoizedBookmark = memo(
  Bookmark,
  (previousProps, nextProps) =>
    previousProps.isBookmarked === nextProps.isBookmarked
);

export default MemoizedBookmark;
