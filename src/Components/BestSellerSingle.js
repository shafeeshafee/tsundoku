import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import BookURLs from "./BookURLs";

import backArrow from "../Images/icons/backarrow.svg";

const BestSellerSingle = (props) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((bool) => !bool);
	};

	return (
		<ReactCardFlip isFlipped={isFlipped}>
			<li onClick={handleClick} className="flex flex-col justify-between cursor-pointer" key={props.primary_isbn10}>
				<p className="w-full flex flex-wrap text-base uppercase font-bold text-reddish py-3 truncate-text">{props.title}</p>
				<img className="h-52 w-36 shadowed" src={props.book_image} alt="book cover" />
				<p className="pt-2">by {props.author}</p>
			</li>

			<div className="flex flex-col justify-evenly">
				<div className="py-5">
					<img onClick={handleClick} className="w-10 cursor-pointer" src={backArrow} alt="" />
				</div>
				<BookURLs url={props.buy_links[5].url} description={props.description} />
			</div>
		</ReactCardFlip>
	);
};

export default BestSellerSingle;
