const backendBaseUrl = 'http://entertainment-web-app-alb-1112223875.us-east-1.elb.amazonaws.com';
const port = 3000;

export const microservicesBaseUrl = `${backendBaseUrl}:${port}`;
export const jwtTokenKey = 'jwtToken'
export const mediaDataKey = 'mediaData'
export const userIdKey = 'userId'
export const bookmarksKey = 'bookmarks'
export const MOBILE_TABLET_WIDTH_THRESHOLD = 768;
export const TABLET_DESKTOP_WIDTH_THRESHOLD = 1024;
export const MOBILE_SLIDE_COUNT = 3;
export const TABLET_SLIDE_COUNT = 5;