const HomePage = () => {
	return (
		<div>
			<div className="h-screen flex flex-col justify-center items-center bg-offwhite font-dark">
				<h1 className="text-3xl sm:text-5xl lg:text-9xl font-title">tsundoku</h1>
				<p className="mt-3 text-base lg:text-3xl">read more books</p>
			</div>
			<Definition />
		</div>
	);
};

export default HomePage;
