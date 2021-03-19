import { useState } from "react";
import ReactCardFlip from "react-card-flip";

import BookURLs from "./BookURLs";

import missingBook from "../Images/missingbook.png";
import backArrow from "../Images/icons/backarrow.svg";

const SingleBook = ({ bookInfo }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((bool) => !bool);
	};

	// console.log(bookInfo)
	const { volumeInfo: book } = bookInfo;

	const removeSpace = (entry) => entry.replaceAll(" ", "+").toLowerCase();

	return (
		<div className="flex flex-col justify-between h-full">
			<ReactCardFlip isFlipped={isFlipped}>
				<div onClick={handleClick} className="flex flex-col justify-between cursor-pointer">
					<h1 className="text-lg uppercase font-bold text-reddish truncate-text">{book.title}</h1>
					<p className="text-dark py-1 truncate-text">by {book.authors && book.authors[0] ? book?.authors[0] : "Unknown Author"}</p>
					<img className="h-48 w-36" src={book.imageLinks?.thumbnail ? book.imageLinks.thumbnail : missingBook} alt="book cover" />
				</div>

				<div className="flex flex-col justify-between">
					<div className="">
						<img onClick={handleClick} className="w-10 cursor-pointer" src={backArrow} alt="back arrow" />
					</div>
					<h1 className="text-lg uppercase font-bold text-reddish">{book.title}</h1>
					<p className="text-dark py-1">by {book.authors && book.authors[0] ? book?.authors[0] : ""}</p>
					<hr />
					<BookURLs
						url={`https://www.indiebound.org/search/book?keys=${removeSpace(
							book.title + " " + `${book.authors && book.authors[0] ? book?.authors[0] : ""}`
						)}`}
						description={book.subtitle ? book.subtitle : "This book does not have information"}
					/>
				</div>
			</ReactCardFlip>
		</div>
	);
};

export default SingleBook;
