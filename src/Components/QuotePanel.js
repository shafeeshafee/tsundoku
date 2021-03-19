import React, { useState, useEffect } from "react";
import quotesData from "./QuotesData";
import ScrollAnimation from "react-animate-on-scroll";

const QuotePanel = () => {
	const [quotes] = useState(quotesData);
	const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

	useEffect(() => {
		const interval = setInterval(() => {
			setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<ScrollAnimation animateIn="fadeIn" duration={2}>
			<div className="h-screen flex justify-between">
				<div className="hidden lg:block bg-man-library bg-cover bg-no-repeat w-1/2 h-full"></div>
				<div className="w-screen lg:w-1/2 bg-offwhite center-content text-dark">
					<div className="text-base md:text-xl lg:text-3xl w-3/4 text-right">{quote}</div>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default QuotePanel;
