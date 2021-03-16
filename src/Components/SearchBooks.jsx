function SearchBooks({ searchInput, handleChange, handleSubmit }) {
	return (
		<div className=" md:flex md:justify-center mb-6 bg-offwhite text-right pt-20">
			<input
				className="border-2 border-gray-200 bg-offwhite  w-56 h-10 rounded-sm px-3 pl-8 py-1  rounded-lg text-sm focus:outline-none"
				type="text"
				placeholder="Title / Author / Topic"
				value={searchInput}
				onChange={handleChange}
			/>
			<button onClick={handleSubmit} className="ml-4" type="submit">
				Search
			</button>
		</div>
	);
}

export default SearchBooks;
