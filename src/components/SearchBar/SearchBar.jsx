import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function SearchBar({ onSubmit }) {
  const submit = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);

      e.target.value = "";
    }
  };

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        type="text"
        placeholder="Search a tv show you may like"
        className={s.input}
        onKeyUp={submit}
      />
    </>
  );
}
