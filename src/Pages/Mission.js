import React from "react";
import ReactPlayer from "react-player/lazy";

import one from "../Images/1.png";
import two from "../Images/2.png";
import three from "../Images/3.png";

import ScrollAnimation from "react-animate-on-scroll";
//Mission Page

const ReturnBodyText = () => {
	return (
		<div className="text-justify">
			<p>
				From relieving stress to improving brain function to increasing empathy,{" "}
				<strong> books are capable of doing a lot more than just entertaining the people who enjoy them</strong>. In fact, reading is the{" "}
				<strong> best workout for your brain</strong>, and it can even <strong> improve your memory</strong>. Sure, unwinding with Netflix
				at the end of every day is relaxing and all, but regularly reading is good for your mind, body, and soul.
			</p>
			<br />
			<p>
				You may not be able to see it, but <strong>your brain is one of the most important parts of yourself</strong>. Without it and the
				memories it keeps, you wouldn't be you, let alone remember all of your favorite books.
			</p>
			<br />
			<p>Luckily, just be reading them, you can help improve your memory and exercise your brain in the most fun and effective way.</p>
		</div>
	);
};

const ReturnWebStory = () => {
	return (
		// add width for 1/4 for each
		<div className="w-3/4 m-auto">
			<div className="story-container ">
				<div className="story-photo flex flex-col lg:flex-row border-t-2 border-b-2 items-center ">
					<a className="lg:w-1/4 p-3" href="https://www.brainpickings.org/2015/03/24/umberto-eco-antilibrary/">
						<img alt="AntiLibrary" src={one} width="200" height="200" />
					</a>
					<div className="story-title lg:w-1/4 p-3 font-bold">
						<h2>Why Unread Books Are More Valuable to Our Lives than Read Ones</h2>
					</div>
					<div className="story-description w-screen px-10 lg:w-11/12 p-3">
						<p className="text-justify">
							The writer Umberto Eco belongs to that small class of scholars who are encyclopedic, insightful, and nondull. He is the owner
							of a large personal library (containing thirty thousand books) ...
						</p>
					</div>
					<div className="story-author lg:w-1/4 p-3">
						<h3 className="text-center">by Maria Popova</h3>
					</div>
				</div>
				<div className="story-container">
					<div className="story-photo flex flex-col lg:flex-row border-t-2 border-b-2 items-center">
						<a
							className="lg:w-1/4 p-3"
							href="https://www.bustle.com/p/what-does-reading-do-to-your-brain-these-5-effects-are-pretty-astounding-74676"
						>
							<img alt="ReadingBook" src={two} width="200" height="200" />
						</a>
						<div className="story-title lg:w-1/4 p-3 font-bold">
							<h2>5 Astonishing Ways Reading Changes Your Brain</h2>
						</div>
						<div className="story-description w-screen px-10 lg:w-11/12  p-3">
							<p className="text-justify">
								Since you were a child, you've probably been told to read because "it's good for you." Parents and doctors, teachers and
								librarians — even me on this very site — have touted the many health and wellness benefits of books, but has anyone every
								told you ...
							</p>
						</div>
						<div className="story-author lg:w-1/4 p-3">
							<h3 className="text-center">by Sadie Trombetta</h3>
						</div>
					</div>
				</div>
				<div className="story-container">
					<div className="story-photo flex flex-col lg:flex-row border-t-2 border-b-2 justify-between  items-center">
						<a className="lg:w-1/4 p-3" href="https://www.ted.com/talks/chip_kidd_why_books_are_here_to_stay">
							<img alt="TedTalk" src={three} width="200" height="200" />
						</a>
						<div className="story-title lg:w-1/4 p-3 font-bold">
							<h2> Why Books Are Here to Stay </h2>
						</div>
						<div className="story-description w-screen px-10 lg:w-11/12 p-3">
							<p className="text-justify">
								Despite the rise of e-books, physical books aren't going anywhere. Graphic designer Chip Kidd shares why their design is so
								lasting. The physical object of a book is almost like a person. I mean, it has a spine and it has a backbone. It has a face.
								Actually ...
							</p>
						</div>
						<div className="story-author lg:w-1/4 p-3">
							<h3 className="text-center">by Chip Kidd</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

function Mission() {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<ScrollAnimation animateIn="fadeIn">
				<div className="flex flex-col py-3 justify-center border-b-8 pb-10">
					<h1 className="text-2xl uppercase font-bold font-headings text-center p-6 pr-10">
						The Tsundoku Project - Books Are Here To Stay
					</h1>
					<ReactPlayer width="100%" height="55vh" url="https://vimeo.com/525395883" />
				</div>
			</ScrollAnimation>
			<hr />
			<div className="bg-offwhite p-5 font-headings">
				<h1 className="text-2xl uppercase font-bold font-headings text-right p-6 pr-10">mission</h1>
				<div>
					<h1 className="font-bold text-3xl">
						{" "}
						WHY WE BELIEVE <br />
						IN READING BOOKS{" "}
					</h1>
				</div>
				<div className="flex flex-col lg:flex-row justify-between items-center py-10 w-full lg:w-3/4">
					<div>
						<h3>
							<strong> By Tsundoku Team </strong>
						</h3>
					</div>
					<div className="w-3/4">
						<ReturnBodyText />
					</div>
				</div>
				<ReturnWebStory />
			</div>
		</ScrollAnimation>
	);
}

export default Mission;
