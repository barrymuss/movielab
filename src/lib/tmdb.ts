const TMDB_API_URL = process.env.REACT_APP_URL || "https://api.themoviedb.org/3";
const TMDB_API_TOKEN = process.env.REACT_APP_TOKEN;
const TMDB_IMG_URL = process.env.REACT_IMG_URL || "https://image.tmdb.org/t/p/w500";

export async function fetchTMDB(endpoint: string) {
  const response = await fetch(`${TMDB_API_URL}${endpoint}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TMDB_API_TOKEN}`,
    },
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`TMDB API error: ${response.status}`);
  }

  return response.json();
}

export { TMDB_IMG_URL };
