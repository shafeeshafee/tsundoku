import ScrollAnimation from "react-animate-on-scroll";

function AboutUs() {
	return (
		<ScrollAnimation duration={2} animateIn="fadeIn">
			<div className="pt-20 font-headings bg-offwhite">
				<h1 className="flex text-3xl float-right pr-5">team's favorite reads</h1>
				<br />
				<ul className="my-20 flex flex-wrap items-center justify-around text-center">
					<li className="my-10 flex flex-col items-center">
						<span className="text-3xl font-light">DIANA GAONA</span>
						<br /> <span className="font-bold uppercase text-reddish">Kitchen</span> by Banana Yoshimoto
						<a href="https://www.amazon.com/dp/B07KPWGBKV">
							<img
								className="mt-10 h-48 w-32"
								src="https://images-na.ssl-images-amazon.com/images/I/71F85zXcMjL.jpg"
								alt="kitchen banana yoshimoto"
							/>
						</a>
					</li>
					<li className="my-10 flex flex-col items-center">
						<span className="text-3xl font-light">SHAFEE AHMED</span>
						<br /> <span className="font-bold uppercase text-reddish">The Brothers Karamazov</span> by Fyodor Dostoyevsky
						<a href="https://www.amazon.com/dp/0374528373/">
							<img
								className="mt-10 h-48 w-32"
								src="https://images-na.ssl-images-amazon.com/images/I/8117HB7WbvL.jpg"
								alt="the brothers karamazov"
							/>
						</a>
					</li>
					<li className="my-10 flex flex-col items-center">
						<span className="text-3xl font-light">SHAN SIDDIQUI</span>
						<br /> <span className="font-bold uppercase text-reddish">Guns, Germs, and Steel</span> by Jared Diamond
						<a href="https://www.amazon.com/dp/B06X1CT33R/">
							<img
								className="mt-10 h-48 w-32 m-auto"
								src="https://images-na.ssl-images-amazon.com/images/I/51LVx6UrW5L._SX326_BO1,204,203,200_.jpg"
								alt="guns germs and steel"
							/>
						</a>
					</li>
				</ul>
			</div>
		</ScrollAnimation>
	);
}

export default AboutUs;
