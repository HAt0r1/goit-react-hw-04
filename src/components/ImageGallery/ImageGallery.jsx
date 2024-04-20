import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul className={style.list}>
      {items.map(({ id, alt_description, urls: { small } }) => {
        return (
          <li className={style.pictureItem} key={id}>
            <ImageCard pic={small} alt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
