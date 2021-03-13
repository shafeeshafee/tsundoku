import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const Slogan = () => {
	return (
		<div className="w-screen bg-white h-screen flex justify-center items-center text-base lg:text-4xl font-headings">
			<div className="flex center-content">
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<p>BOOKS ARE HERE TO STAY</p>
				<ScrollAnimation animateIn="fadeInDown" initiallyVisible={true} animateOnce={true}>
					<Link to="/purpose">
						<p className="text-reddish z-30 text-lg lg:text-6xl pt-3 font-bold">BOOKS ARE HERE TO STAY</p>
					</Link>
				</ScrollAnimation>
			</div>
		</div>
	);
};

export default Slogan;
