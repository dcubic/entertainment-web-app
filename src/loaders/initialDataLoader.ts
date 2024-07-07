import { redirect } from "react-router-dom";
import { fetchMediaData } from "../services/apis/mediaApi";
import { isAuthenticated } from "../utils/utils";
import { refreshBookmarks } from "../services/apis/bookmarksApi";

export const initialDataLoader = async () => {
  if (!isAuthenticated()) throw redirect("/login");

  const [ mediaData, refreshedBookmarks ] = await Promise.all([
    fetchMediaData(),
    refreshBookmarks()
  ])

  return { mediaData };
};
