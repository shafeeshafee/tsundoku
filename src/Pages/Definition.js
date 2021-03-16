import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
const Definition = () => {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<div className="flex h-screen font-title">
				<div className="bg-dark w-full flex flex-col justify-evenly text-offwhite">
					{/* first panel */}
					<div className="w-3/4 m-auto flex flex-col justify-around">
						<h1 className="font-bold text-base lg:text-4xl mb-10">tsundoku (n.) - 積ん読</h1>
						<p className="font-light text-base lg:text-4xl">
							buying books and not reading them; letting books pile up unread on shelves or floors or nightstands
						</p>
						<div className="font-light text-sm lg:text-md py-10">
							<ScrollAnimation animateIn="fadeInRight" animateOnce={true} duration={1}>
								here's why that may{" "}
								<a className="text-blue-400" href="https://www.brainpickings.org/2015/03/24/umberto-eco-antilibrary/">
									not be a bad thing
								</a>
								.
							</ScrollAnimation>
							<br />
							<ScrollAnimation animateIn="fadeInLeft" animateOnce={true} duration={1}>
								<p className="py-3">
									read more about it in our{" "}
									<Link className="text-blue-400" to="/missions">
										missions page
									</Link>
									.
								</p>
							</ScrollAnimation>
						</div>
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
