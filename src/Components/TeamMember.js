import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import githubIcon from "../Images/icons/github-icon.svg";
import linkedInIcon from "../Images/icons/linkedin-icon.svg";
import backArrow from "../Images/icons/backarrow.svg";

const TeamMember = ({ name, title, author, image, alt, url, bio, github, linkedin }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((bool) => !bool);
	};

	return (
		<li>
			<div className="flex flex-col items-center justify-evenly">
				<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedFrontToBack="0.3">
					<div className="flex flex-col items-center py-3">
						<span
							onClick={handleClick}
							className="cursor-pointer text-3xl font-light uppercase pt-5 border-gray border-t-2 sm:border-none text-center"
						>
							{name}
						</span>
						<br />
						<span className="font-bold uppercase text-reddish">{title}</span> by {author}
						<a className="z-30" href={url} target="_blank" rel="noreferrer">
							<img className="mt-10 h-48 w-32" src={image} alt={alt} />
						</a>
					</div>
					<div className="py-5 flex flex-col">
						<img onClick={handleClick} className="w-10 ml-8 cursor-pointer" src={backArrow} alt="" />
						<h1 className="p-10 text-justify">{bio}</h1>
						<div className="flex justify-evenly items-center">
							<a href={github} target="_blank" rel="noreferrer">
								<img className="w-6 h-6" src={githubIcon} alt="github" />
							</a>
							<a href={linkedin} target="_blank" rel="noreferrer">
								<img className="w-6 h-6" src={linkedInIcon} alt="linkedin" />
							</a>
						</div>
					</div>
				</ReactCardFlip>
			</div>
		</li>
	);
};

export default TeamMember;
