import bookSrch from "../Images/icons/bookSrch.svg";

function SearchBooks({ searchInput, handleChange, handleSubmit }) {
	return (
		<div className="flex m-auto justify-center mb-6 bg-offwhite text-right pt-20 w-3/4">
			<input
				className="border-2 border-gray-200 bg-offwhite w-56 h-10 rounded-sm px-3 pl-8 py-1 text-sm focus:outline-none"
				type="text"
				placeholder="Title / Author / Topic"
				value={searchInput}
				onChange={handleChange}
			/>
			<button onClick={handleSubmit} className="ml-4" type="submit">
				<img className="w-10 h-10" src={bookSrch} />
			</button>
		</div>
	);
}

export default SearchBooks;
