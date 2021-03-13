import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const TeamMember = ({ name, title, author, image, alt, url }) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = (e) => {
		e.preventDefault();
		setIsFlipped((bool) => !bool);
	};

	return (
		<li>
			<div className="flex flex-col items-center justify-evenly">
				<ReactCardFlip isFlipped={isFlipped} flipDirection="vertical" flipSpeedFrontToBack="0.3">
					<div className="flex flex-col items-center">
						<span onClick={handleClick} className="cursor-pointer text-3xl font-light uppercase">
							{name}
						</span>
						<br />
						<span className="font-bold uppercase text-reddish">{title}</span> by {author}
						<a className="z-30" href={url} target="_blank">
							<img className="mt-10 h-48 w-32" src={image} alt={alt} />
						</a>
					</div>
					<div className="py-5">
						<img onClick={handleClick} className="w-10 cursor-pointer" src="https://www.svgrepo.com/show/111215/back.svg" alt="" />
						<h1 className="p-10 text-justify">
							Hi, I'm {name}. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, maiores, repudiandae omnis dolores eum
							explicabo animi laboriosam dolorem dicta, laborum expedita temporibus modi quibusdam culpa eaque! Quos quasi nemo dignissimos.
						</h1>
					</div>
				</ReactCardFlip>
			</div>
		</li>
	);
};

export default TeamMember;
