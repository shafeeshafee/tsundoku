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
			console.log("Running every 5 seconds");
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<ScrollAnimation animateIn="fadeIn">
			<div className="px-20 mt-10 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 h-36">
				{bookslist?.map((el) => {
					return <SingleBook bookInfo={el} key={el.id} />;
				})}
			</div>
			<div className="py-10 text-center w-full static">
				<div className="w-3/4 m-auto text-sm h-24">{quote}</div>
			</div>
		</ScrollAnimation>
	);
}

export default SearchResults;
