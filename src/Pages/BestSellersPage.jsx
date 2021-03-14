import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchBestsellers } from "../Actions/bestsellersActions";
import Bestsellers from "../Components/Bestsellers";
import Categories from "../Components/Categories";
import ScrollAnimation from "react-animate-on-scroll";

const BestSellersPage = () => {
	const dispatch = useDispatch();

	const initialBestsellers = useSelector((state) => {
		return state.bestsellers;
	});

	const { bestsellers } = initialBestsellers;

	useEffect(() => {
		dispatch(fetchBestsellers());
	}, [dispatch]);

	const renderBestsellers = () => {
		if (bestsellers.loading) return <p> Loading BestSellers...</p>;
		if (bestsellers.hasErrors) return <p>An error has occurred</p>;
		return bestsellers;
	};

	return (
		<div>
			<ScrollAnimation duration={1} animateIn="fadeIn">
				<Categories />
				<Bestsellers bestsellerslist={renderBestsellers()} />
			</ScrollAnimation>
		</div>
	);
};

export default BestSellersPage;
