// Hooks import
import { useEffect, useState } from "react";
// API function import
import { getData } from "../gallery-image";
// Components import
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
    setPictures([]);
    setKeyWord(value);
    setPage(1);
  };

  useEffect(() => {
    if (keyWord === "") {
      return;
    }
    const getPictures = async () => {
      try {
        setIsLoading(true);
        const data = await getData(keyWord, page);
        setPictures((prev) => {
          return [...prev, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPictures();
  }, [keyWord, page]);

  const handleSetPage = () => {
    setPage(page + 1);
  };

  console.log(pictures);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {pictures.length > 0 && <ImageGallery items={pictures} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {pictures.length > 0 && page >= 1 && (
        <LoadMoreBtn onClick={handleSetPage} />
      )}
    </>
  );
};

export default App;
