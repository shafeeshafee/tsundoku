import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBooks } from "../Actions/booksActions";
import SearchBooks from "../Components/SearchBooks";
import SearchResults from "../Components/SearchResults";

const SearchBooksPage = () => {
  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  const initialBooks = useSelector((state) => {
    return state.books;
  });

  const { books } = initialBooks;
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  useEffect(() => {
    dispatch(fetchBooks("cat"));
  }, [dispatch]);

  const renderBooks = () => {
    if (books.loading) return <p> Loading BestSellers...</p>;
    if (books.hasErrors) return <p>An error has occurred</p>;
    return books.items;
  };

  return (
    <div className="bg-offwhite flex flex-col font-headings h-screen">
      <SearchBooks searchInput={searchInput} handleChange={handleChange} />

      <SearchResults bookslist={renderBooks()} />
    </div>
  );
};

export default SearchBooksPage;
