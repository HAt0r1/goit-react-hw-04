import { useEffect, useState } from "react";
import { getData } from "../gallery-image";
import ErrorMessage from "./ErrorMessage/ErrorMessage";
import Loader from "./Loader/Loader";
import SearchBar from "./SearchBar/SearchBar";
import ImageGallery from "./ImageGallery/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [keyWord, setKeyWord] = useState("");

  const handleSubmit = async (value) => {
    try {
      setPictures([]);
      setIsLoading(true);
      const data = await getData(value, page);
      setPictures(data);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(pictures);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {pictures.length > 0 && page >= 1 && <LoadMoreBtn />}
    </>
  );
};

export default App;
