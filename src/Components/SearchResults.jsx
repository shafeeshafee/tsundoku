import React, { useState, useEffect } from "react";
import quotesData from "./QuotesData";
import SingleBook from "./SingleBook";
import ScrollAnimation from "react-animate-on-scroll";

function SearchResults({ bookslist }) {
	const [quotes] = useState(quotesData);
	const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

	useEffect(() => {
		const interval = setInterval(() => {
			setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
		}, 5000);

		return () => clearInterval(interval);
	}, []);
	return (
		<ScrollAnimation animateIn="fadeIn">
			<div className="px-20 mt-10 grid grid-cols-1 gap-10 xl:gap-20 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-5">
				{bookslist?.map((el) => {
					return <SingleBook bookInfo={el} key={el.id} />;
				})}
			</div>
			<br />
			<hr />
			<div className="h-96 flex justify-center">
				<div className="py-10 pt-30 text-center w-3/4 h-36">{quote}</div>
			</div>
		</ScrollAnimation>
	);
}
export default SearchResults;
