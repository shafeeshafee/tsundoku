import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const Definition = () => {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<div className="flex h-screen font-headings">
				<div className="bg-dark w-full flex flex-col justify-evenly text-offwhite">
					{/* first panel */}
					<div className="w-3/4 m-auto flex flex-col justify-around text-4xl">
						<h1 className="font-bold mb-10">tsundoku (n.)</h1>
						<p className="font-light">the act of acquiring books that then pile up, often unread, in one's home</p>
					</div>
				</div>
				{/* second panel */}
				<div className="hidden lg:block bg-girl-library w-full"></div>
				{/* third panel */}
				<div className="w-full center-content font-bold text-6xl leading-9 border-t-4 border-b-4">
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p>read more</p>
					<p className="text-reddish z-30">read more</p>
					<p>read more</p>
					<p>read more</p>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default Definition;
