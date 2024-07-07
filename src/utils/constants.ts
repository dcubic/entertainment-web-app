const backendBaseUrl = 'http://entertainment-web-app-alb-1112223875.us-east-1.elb.amazonaws.com';
const port = 3000;

export const microservicesBaseUrl = `${backendBaseUrl}:${port}`;
export const jwtTokenKey = 'jwtToken'
export const mediaDataKey = 'mediaData'
export const userIdKey = 'userId'
export const bookmarksKey = 'bookmarks'