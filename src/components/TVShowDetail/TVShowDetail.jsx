import s from "./style.module.css";

export default function TVShowDetail({ tvShow }) {
  return (
    <div>
      <div className={s.title}>{tvShow?.name}</div>
      <div className={s.rating}>{tvShow?.vote_average / 2}</div>
      <div className={s.overview}>{tvShow?.overview}</div>
    </div>
  );
}
