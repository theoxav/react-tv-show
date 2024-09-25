import { useEffect, useState } from "react";
import { TVShowAPI } from "./services/api/TVShow";

import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import TVShowList from "./components/TVShowList/TVShowList";
import SearchBar from "./components/SearchBar/SearchBar";

import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";

export default function App() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [currentTvShow, setCurrentTvShow] = useState(null);
  const [recommendations, setRecommendations] = useState([]);

  async function fetchPopulars() {
    setIsLoading(true);
    try {
      const results = await TVShowAPI.fetchPopulars();
      if (results.length > 0) {
        setCurrentTvShow(results[0]);
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchRecommendations(tvShowId) {
    setIsLoading(true);
    try {
      const results = await TVShowAPI.fetchRecommendations(tvShowId);
      if (results.length > 0) {
        setRecommendations(results.slice(0, 10));
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTvShow) {
      fetchRecommendations(currentTvShow.id);
    }
  }, [currentTvShow]);

  const handleSearchTvShow = async (tvShowName) => {
    const searchResponse = await TVShowAPI.fetchByTitle(tvShowName);
    if (searchResponse && searchResponse.length > 0) {
      setCurrentTvShow(searchResponse[0]);
    }
  };

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTvShow?.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              title="WatToWatch"
              subtitle="Find a show you may like"
              image={logo}
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <SearchBar onSubmit={handleSearchTvShow} />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TVShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendations && recommendations.length > 0 && (
          <TVShowList
            onClickItem={setCurrentTvShow}
            tvShowList={recommendations}
          />
        )}
      </div>
    </div>
  );
}
