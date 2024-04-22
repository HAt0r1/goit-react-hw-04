import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

const ImageGallery = ({ items, onOpen, modalFunc }) => {
  return (
    <ul className={style.list}>
      {items.map(({ id, alt_description, urls: { small, regular } }) => {
        return (
          <li
            onClick={() => modalFunc(regular, alt_description)}
            className={style.pictureItem}
            key={id}
          >
            <ImageCard onOpen={onOpen} pic={small} alt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
