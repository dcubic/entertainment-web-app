import {
  jwtTokenKey,
  mediaDataKey,
  microservicesBaseUrl,
} from "../../utils/constants";
const getMediaDataUrl = `${microservicesBaseUrl}/media/data`;

export const fetchMediaData = async () => {
  if (mediaDataKey in localStorage) {
    return JSON.parse(localStorage.getItem(mediaDataKey)!);
  }

  const response = await fetch(getMediaDataUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem(jwtTokenKey)}`,
    },
  });
  const data = await response.json();
  localStorage.setItem("mediaData", JSON.stringify(data));

  return data;
};
