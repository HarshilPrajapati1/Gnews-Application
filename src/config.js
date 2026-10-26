// GNews API configuration
// Create a .env file in the project root with:
// REACT_APP_GNEWS_API_KEY=your_real_api_key
// Then restart the development server.
export const API_KEY = process.env.REACT_APP_GNEWS_API_KEY || "";

if (!API_KEY) {
  console.warn(
    "GNews API key is missing. Add REACT_APP_GNEWS_API_KEY in a .env file to load live news articles."
  );
}
