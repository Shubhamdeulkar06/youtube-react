const GOOGLE_API_KEY = "AIzaSyCJQRwfaNAj0_AoqqR4ejDmors_S03bkoI";
const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export default YOUTUBE_VIDEO_API;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io?http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";
