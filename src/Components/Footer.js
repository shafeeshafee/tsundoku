import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="h-full">
			<footer className="flex flex-wrap justify-between font-headings bg-dark text-white text-lg p-21 py-24">
				<div className="flex flex-wrap justify-evenly w-screen items-center">
					<div>
						<ul className="py-4 px-10">
							<Link to="/aboutus">
								<li>Our Favorite</li>
							</Link>
							<Link to="/">
								<li>Why Books</li>
							</Link>
							<Link to="/aboutus">
								<li>Contact</li>
							</Link>
						</ul>
					</div>
					<div>
						<ul className="py-4 px-10">
							<Link to="/aboutus">
								<li>Team</li>
							</Link>
							<Link to="/">
								<li>Save Libraries</li>
							</Link>
							<a href="https://www.strandbooks.com/">
								<li>Strand</li>
							</a>
						</ul>
					</div>
					<div className="flex justify-between">
						<ul className="py-4 px-10">
							<Link to="/">
								<li>
									<img className="w-7 h-7 my-2" src="https://www.svgrepo.com/show/306392/medium.svg" alt="medium" />
								</li>
							</Link>
							<Link to="/">
								<li>
									<img className="w-7 h-7 my-2" src="https://www.svgrepo.com/show/4675/instagram.svg" alt="insta" />
								</li>
							</Link>
							<Link to="/">
								<li>
									<img src="https://www.svgrepo.com/show/11296/twitter.svg" alt="twitter" />
								</li>
							</Link>
						</ul>
					</div>

					<p className="flex border-t border-gray-500 text-white-200 text-sm flex-col">
						&copy;{new Date().getFullYear()} Tsundoku | All Rights Reserved | Terms Of Service | Privacy
					</p>
				</div>
			</footer>
		</div>
	);
}
export default Footer;
