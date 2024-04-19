import ImageCard from "../ImageCard/ImageCard";

import style from "./ImageGallery.module.css";

const ImageGallery = ({ items }) => {
  return (
    <ul className={style.list}>
      <ImageCard items={items} />
    </ul>
  );
};

export default ImageGallery;
