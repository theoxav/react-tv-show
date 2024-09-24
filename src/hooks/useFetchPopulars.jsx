import { useEffect, useState } from "react";
import { TVShowAPI } from "../services/api/TVShow";

export function useFetchPopulars() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const results = await TVShowAPI.fetchPopulars();
        setData(results[0]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { currentTvShow: data, error, isLoading };
}
