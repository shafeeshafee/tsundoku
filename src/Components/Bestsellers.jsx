import BestSellerSingle from "./BestSellerSingle";

const BestSellers = ({ bestsellerslist }) => {
	const { books } = bestsellerslist;

	console.log(books);

	return (
		<div className="bg-offwhite font-headings pb-20">
			<h1 className="text-center pt-10 text-2xl uppercase font-bold">TRENDING FICTION</h1>
			<ul className="px-20 pt-10 grid-flow-row grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
				{books?.map((el) => {
					return <BestSellerSingle {...el} />;
				})}
			</ul>
		</div>
	);
};

export default BestSellers;
