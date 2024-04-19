import style from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  return (
    <div className={style.container}>
      <button className={style.button} type="button">
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
