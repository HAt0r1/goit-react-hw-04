import { BsSearch } from "react-icons/bs";
import style from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.search.value;
    if (inputValue === "") {
      return;
    }
    onSubmit(inputValue);
    form.reset();
  };

  return (
    <header className={style.header}>
      <form onSubmit={handleFormSubmit} className={style.form}>
        <div className={style.inputContainer}>
          <input
            className={style.input}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={style.button} type="submit">
            <BsSearch className={style.search} />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
