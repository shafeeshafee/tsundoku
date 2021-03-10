import SingleBook from './SingleBook';

function SearchResults({bookslist}) {
  
  return (
    <div>
      <h1>Results</h1>
      {bookslist?.map(el => {
        return <SingleBook bookInfo={el} key={el.id}/>
      })}
     
    </div>
  );
}

export default SearchResults;
