import sboxStyles from "./SearchBox.module.css";
import { useId } from "react";
import { changeFilter } from "../../redux/filtersSlice";
import { useDispatch } from "react-redux";
const SearchBox = () => {
  const dispatch = useDispatch();
  const searchFieldId = useId();
  return (
    <div className={sboxStyles["search-container"]}>
      <label htmlFor={searchFieldId}> Find contacts by name</label>
      <input
        className={sboxStyles["search-field"]}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
        placeholder="....."
      />
    </div>
  );
};

export default SearchBox;
