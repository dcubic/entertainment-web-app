import { useCallback, useState } from "react";
import {
  addBookmark,
  getCachedBookmarks,
  refreshBookmarks,
  removeBookmark,
} from "../services/apis/bookmarksApi";
import { useNavigate } from "react-router-dom";

export const useBookmarkManager = () => {
  const navigate = useNavigate();

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    const cachedBookmarks = getCachedBookmarks();
    if (!cachedBookmarks.isSuccess) {
      return [];
    } else {
      return cachedBookmarks.bookmarks!;
    }
  });

  const isBookmarked = useCallback(
    (title: string) => {
      return bookmarks.includes(title);
    },
    [bookmarks]
  );

  const toggleBookmark = useCallback(
    async (title: string) => {
      let isAuthorized = true;
      if (isBookmarked(title)) {
        const isRemoveAuthorized = await removeBookmark(title);
        if (!isRemoveAuthorized) {
          isAuthorized = false;
        }
      } else {
        const isAddAuthorized = await addBookmark(title);
        if (!isAddAuthorized) {
          isAuthorized = false;
        }
      }

      if (!isAuthorized) {
        navigate("/login");
      } else {
        const refreshedBookmarks = await refreshBookmarks();
        if (!refreshedBookmarks.isSuccess) {
          navigate("/login");
        } else {
          setBookmarks(refreshedBookmarks.bookmarks!);
        }
      }
    },
    [isBookmarked]
  );

  return { isBookmarked, toggleBookmark };
};
