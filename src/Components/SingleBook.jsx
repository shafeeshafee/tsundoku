const SingleBook = ({bookInfo}) => {

  // console.log(bookInfo)
  const {volumeInfo:book}=bookInfo
  console.log(book)
  
  return (
    <div>
      <h1>{book.title}</h1>
      <h2>{book.subtitle}</h2>
      <img src={book.imageLinks.thumbnail} alt="book cover" />
      <p>By: {book.authors? book.authors[0]: ""}</p>
    </div>
  );
}

export default SingleBook;
