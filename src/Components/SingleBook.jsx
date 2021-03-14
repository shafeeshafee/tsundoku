import { useState } from "react";
import ReactCardFlip from "react-card-flip";

const SingleBook = ({ bookInfo }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((bool) => !bool);
	};

	// console.log(bookInfo)
	const { volumeInfo: book } = bookInfo;
	console.log(book);

	return (
		<div className="flex flex-col justify-between">
			<ReactCardFlip isFlipped={isFlipped}>
				<div onClick={handleClick} className="flex flex-col justify-between cursor-pointer">
					<h1 className="text-lg uppercase font-bold text-reddish">{book.title}</h1>
					<p className="text-dark py-1">by {book.authors ? book.authors[0] : ""}</p>
					<img
						className="h-48 w-36"
						src={
							book.imageLinks?.thumbnail
								? book.imageLinks.thumbnail
								: "https://www.gollancz.co.uk/wp-content/uploads/2018/07/missingbook.png"
						}
						alt="book cover"
					/>
					{/* <button onClick={handleClick}>Flip Card</button> */}
				</div>

				<div className="flex flex-col justify-evenly">
					<div className="py-5">
						<img onClick={handleClick} className="w-10 cursor-pointer" src="https://www.svgrepo.com/show/111215/back.svg" alt="" />
					</div>
					<h1 className="text-lg uppercase font-bold text-reddish">{book.title}</h1>
					<p className="text-dark py-1">by {book.authors ? book.authors[0] : ""}</p>
					<h2>{book.subtitle ? book.subtitle : "This book does not have information"}</h2>
				</div>
			</ReactCardFlip>
		</div>
	);
};

export default SingleBook;
