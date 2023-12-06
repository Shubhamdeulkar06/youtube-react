const GOOGLE_API_KEY = "AIzaSyCJQRwfaNAj0_AoqqR4ejDmors_S03bkoI";
const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" +
  GOOGLE_API_KEY;

export default YOUTUBE_VIDEO_API;
