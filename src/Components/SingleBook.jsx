const SingleBook = ({ bookInfo }) => {
	// console.log(bookInfo)
	const { volumeInfo: book } = bookInfo;
	console.log(book);

	return (
		<div className="flex flex-col justify-between">
			<h1 className="text-lg uppercase font-bold text-reddish">{book.title}</h1>
			<p className="text-dark py-1">by {book.authors ? book.authors[0] : ""}</p>
			{/* <h2>{book.subtitle}</h2> */}
			<img className="h-48 w-36" src={book.imageLinks.thumbnail} alt="book cover" />
		</div>
	);
};

export default SingleBook;
