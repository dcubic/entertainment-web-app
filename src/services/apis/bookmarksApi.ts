import {
  jwtTokenKey,
  userIdKey,
  microservicesBaseUrl,
  bookmarksKey,
} from "../../utils/constants";
import { StatusCode } from "../../utils/StatusCode";

interface FetchBookmarksResult {
  isSuccess: boolean;
  bookmarks?: string[];
}

export const refreshBookmarks = async (): Promise<FetchBookmarksResult> => {
  const response = await fetch(
    `${microservicesBaseUrl}/bookmark/users/${localStorage.getItem(
      userIdKey
    )}/bookmarks`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(jwtTokenKey)}`,
      },
    }
  );

  if (!response.ok) {
    return { isSuccess: false };
  }

  const bookmarks: string[] = await response.json();
  localStorage.setItem(bookmarksKey, JSON.stringify(bookmarks));
  return { isSuccess: true, bookmarks: bookmarks };
};

export const getCachedBookmarks = (): FetchBookmarksResult => {
  const cachedBookmarkString = localStorage.getItem(bookmarksKey);
  if (cachedBookmarkString !== null) {
    const cachedBookmarks: string[] = JSON.parse(cachedBookmarkString);
    return { isSuccess: true, bookmarks: cachedBookmarks };
  } else {
    return { isSuccess: false };
  }
};

export const fetchBookmarks = async () => {
  const cachedBookmarks = getCachedBookmarks();
  if (cachedBookmarks !== null) return cachedBookmarks;

  return await refreshBookmarks();
};

export const addBookmark = async (title: string) => {
  const response = await fetch(
    `${microservicesBaseUrl}/bookmark/users/${localStorage.getItem(
      userIdKey
    )}/bookmarks`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(jwtTokenKey)}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    }
  );

  return response.status !== StatusCode.UNAUTHORIZED
};

export const removeBookmark = async (title: string) => {
  const response = await fetch(
    `${microservicesBaseUrl}/bookmark/users/${localStorage.getItem(
      userIdKey
    )}/bookmarks/${title}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem(jwtTokenKey)}`,
      },
    }
  );

  return response.status !== StatusCode.UNAUTHORIZED
};
