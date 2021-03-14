import React from "react";

const BookURLs = ({ url, description }) => {
	return (
		<div className="flex flex-col justify-between">
			<p className="pb-10 text-justify">{description}</p>
			<div className="flex center-content">
				<a href={url} target="_blank">
					<img className="w-8 h-8" src="https://www.svgrepo.com/show/126844/purchase-books.svg" alt="" />
				</a>
			</div>
		</div>
	);
};

export default BookURLs;
