import React, { useState, useEffect } from "react";
import quotesData from "./QuotesData";

const QuotePanel = () => {
	const [quotes] = useState(quotesData);
	const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

	useEffect(() => {
		setInterval(() => {
			setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
		}, 3000);
	}, []);

	return (
		<div className="h-screen flex justify-between">
			<div className="hidden lg:block bg-man-library bg-cover bg-no-repeat w-1/2 h-full"></div>
			<div className="w-screen lg:w-1/2 bg-offwhite center-content text-dark">
				<div className="text-3xl p-10 text-right">{quote}</div>
			</div>
		</div>
	);
};

export default QuotePanel;
