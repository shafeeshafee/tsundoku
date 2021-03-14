import React, { useState, useEffect } from "react";
import axios from "axios";
import BestSellerSingle from "./BestSellerSingle";
import ScrollAnimation from "react-animate-on-scroll";

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [topic, setTopic] = useState("combined-print-and-e-book-nonfiction");
	const [displayTopic, setDisplayTopic] = useState([]);

	const fetchCategoryNames = async () => {
		const response = await axios.get(`${process.env?.REACT_APP_NYT_CATEGORY_NAMES}api-key=${process.env.REACT_APP_NYT_API_KEY}`);

		setCategories(response.data.results);
	};

	const renderTopicSection = async () => {
		const response = await axios.get(`${process.env.REACT_APP_NYT_CATEGORY}${topic}.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`);

		setDisplayTopic(response.data.results.books);
	};

	useEffect(() => {
		fetchCategoryNames();
	}, []);

	useEffect(() => {
		renderTopicSection();
	}, [topic]);

	return (
		<ScrollAnimation duration={1} animateIn="fadeIn">
			<div className="flex flex-col justify-between bg-offwhite">
				<div className="flex justify-end">
					<select
						onChange={(e) => {
							const selectedTopic = e.target.value;
							setTopic(selectedTopic);
						}}
						className="text-center mt-20 bg-gray-300 text-dark font-headings border-2 outline-none border-none p-3 w-full lg:w-1/2 xl:w-1/4 cursor-pointer text-xl shadowed"
					>
						<option className="text-base bg-dark text-white" value="">
							See all bestseller topics
						</option>
						{categories.map((entry, index) => {
							return (
								<option
									className="border-2 bg-dark m-10 cursor-pointer"
									onClick={() => setTopic(entry.list_name_encoded)}
									key={index}
									className="text-base"
								>
									{entry.list_name}
								</option>
							);
						})}
					</select>
				</div>
				<h1 className="bg-offwhite text-center py-20 text-2xl uppercase font-headings font-bold">
					{topic ? topic.replace(/-/g, " ") : "Select a topic"}
				</h1>
				<div className="bg-offwhite font-headings pb-20 flex justify-evenly">
					<ul className="px-20 grid-flow-row grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
						{displayTopic.map((item) => {
							return <BestSellerSingle {...item} />;
						})}
					</ul>
				</div>
			</div>
		</ScrollAnimation>
	);
};

export default Categories;
