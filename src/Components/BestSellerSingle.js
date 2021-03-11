import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const BestSellerSingle = (props) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((bool) => !bool);
	};

	return (
		<div>
			<ReactCardFlip isFlipped={isFlipped}>
				<li onClick={handleClick} className="flex flex-col justify-between" key={props.primary_isbn10}>
					<p className="w-auto flex flex-wrap text-base uppercase font-bold text-reddish">{props.title}</p>
					<p>by {props.author}</p>
					<img className="h-48 w-36" src={props.book_image} alt="book cover" />
				</li>

				<div onClick={handleClick} className="flex flex-col justify-evenly">
					<h1>This is the back page.</h1>
				</div>
			</ReactCardFlip>
		</div>
	);
};

export default BestSellerSingle;
