export class TVShowAPI {
  static async fetchPopulars() {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_TMDB_URL}/tv/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }`
      );
      if (response.ok) {
        const data = await response.json();

        return data.results;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
