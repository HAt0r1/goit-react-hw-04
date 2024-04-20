import style from "./ImageCard.module.css";

const ImageCard = ({ pic, alt }) => {
  return (
    <div className={style.pictureContainer}>
      <img className={style.picture} src={pic} alt={alt} />
    </div>
  );
};

export default ImageCard;
