import style from "./ImageCard.module.css";

const ImageCard = ({ items }) => {
  return (
    <>
      {items.map(({ id, alt_description, urls: { small } }) => {
        return (
          <li key={id} className={style.pictureItem}>
            <div className={style.pictureContainer}>
              <img
                className={style.picture}
                src={small}
                alt={alt_description}
              />
            </div>
          </li>
        );
      })}
    </>
  );
};

export default ImageCard;
