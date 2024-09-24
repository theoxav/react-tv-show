import s from "./style.module.css";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import Logo from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import TVShowListItem from "./components/TVShowListItem/TVShowListItem";
import { useEffect, useState } from "react";
import { TVShowAPI } from "./services/api/TVShow";
import TVShowList from "./components/TVShowList/TVShowList";

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

  const handleSetTvShow = (tvShow) => {};

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTvShow
          ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${
              import.meta.env.VITE_BACKDROP_BASE_URL
            }${currentTvShow?.backdrop_path}") no-repeat center / cover`
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
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTvShow && <TVShowDetail tvShow={currentTvShow} />}
      </div>
      <div className={s.recommendations}>
        {recommendations && recommendations.length > 0 && (
          <TVShowList tvShowList={recommendations} />
        )}
      </div>
    </div>
  );
}
