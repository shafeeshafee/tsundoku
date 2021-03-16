import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
const Definition = () => {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<div className="flex h-screen font-title">
				<div className="bg-dark w-full flex flex-col justify-evenly text-offwhite">
					{/* first panel */}
					<div className="w-3/4 m-auto flex flex-col justify-around">
						<h1 className="font-bold text-base lg:text-4xl mb-10">tsundoku (n.) - 積ん読</h1>
						<p className="font-light text-base lg:text-4xl">the act of acquiring books that then pile up, often unread, in one's home</p>
					</div>
				</div>
				{/* second panel */}
				<div className="hidden lg:block bg-girl-library w-full"></div>
				{/* third panel */}
			</div>
		</ScrollAnimation>
	);
};

export default Definition;
