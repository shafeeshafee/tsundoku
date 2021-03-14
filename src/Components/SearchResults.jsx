import SingleBook from "./SingleBook";
import ScrollAnimation from "react-animate-on-scroll";

function SearchResults({ bookslist }) {
	return (
		<ScrollAnimation animateIn="fadeIn">
			<div className="px-20 mt-10 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
				{bookslist?.map((el) => {
					return <SingleBook bookInfo={el} key={el.id} />;
				})}
				:
				<div className="h-96">
					<p>Quotes</p>
				</div>
			</div>
		</ScrollAnimation>
	);
}

export default SearchResults;
