import s from "./style.module.css";
import TVShowDetail from "./components/TVShowDetail/TVShowDetail";
import { useFetchPopulars } from "./hooks/useFetchPopulars";
import Logo from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";

export default function App() {
  const { currentTvShow, error, isLoading } = useFetchPopulars();

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
      <div className={s.recommendations}>Recommendations</div>
    </div>
  );
}
