import SingleBook from "./SingleBook";

function SearchResults({ bookslist }) {
	return (
		<div className="px-20 mt-10 grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
			{bookslist?.map((el) => {
				return <SingleBook bookInfo={el} key={el.id} />;
			})}
		</div>
	);
}

export default SearchResults;
