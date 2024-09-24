import TVShowListItem from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export default function TVShowList({ tvShowList }) {
  return (
    <>
      <div className={s.title}>You may also like:</div>
      <div className={s.list}>
        {tvShowList.map((tvShow) => (
          <span key={tvShow.id} className={s.tv_show_list_item}>
            <TVShowListItem
              tvShow={tvShow}
              onClick={(tvShow) => console.log(tvShow)}
            />
          </span>
        ))}
      </div>
    </>
  );
}
