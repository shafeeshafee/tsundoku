function SearchBooks() {
  return (
    <div className=" md:flex md:justify-center mb-6 bg-offwhite text-right pt-20">
      <button className="mr-4" type="submit">
        Search
      </button>
      <input
        className="border-2 border-gray-200 bg-offwhite  w-56 h-10 rounded-sm px-3 pl-8 py-1  rounded-lg text-sm focus:outline-none"
        // className={"border-b-2 bg-offwhite md:w-full px-8"}
        type="text"
        placeholder="Title / Author / Topic"
      />
    </div>
  );
}

export default SearchBooks;
