import BestSellerSingle from "./BestSellerSingle";
import ScrollAnimation from "react-animate-on-scroll";

const BestSellers = ({ bestsellerslist }) => {
	const { books } = bestsellerslist;

	console.log(books);

	return (
		<ScrollAnimation duration={1} animateIn="fadeIn">
			<div className="bg-offwhite font-headings pb-20">
				<h1 className="text-center py-20 text-2xl uppercase font-bold">TRENDING FICTION</h1>
				<ul className="px-20 grid-flow-row grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
					{books?.map((el) => {
						return <BestSellerSingle {...el} />;
					})}
				</ul>
			</div>
		</ScrollAnimation>
	);
};

export default BestSellers;
