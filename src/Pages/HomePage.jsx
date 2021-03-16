import BookView from "../Components/BookView";
import QuotePanel from "../Components/QuotePanel";
import Definition from "./Definition";
import ScrollAnimation from "react-animate-on-scroll";
import Slogan from "../Components/Slogan";

const HomePage = () => {
	return (
		<div>
			<div className="h-screen flex flex-col justify-center items-center bg-offwhite font-dark">
				<ScrollAnimation animateIn="fadeIn">
					<h1 className="text-3xl sm:text-5xl lg:text-9xl font-title block lg:hidden">tsundoku</h1>
				</ScrollAnimation>
				<BookView toggleShow="hidden lg:block" />
				<p className="mt-3 text-base lg:text-3xl block lg:hidden">books are here to stay</p>
			</div>
			<Definition />
			<QuotePanel />
			<Slogan />
		</div>
	);
};

export default HomePage;
