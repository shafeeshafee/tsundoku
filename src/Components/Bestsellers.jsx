const BestSellers = ({bestsellerslist}) => {

    const {books} = bestsellerslist;
    console.log(books)

    return (
        <div>
            <h1>Best Sellers</h1>
            <ul>{books?.map(el => {
                return (
                <li key={el.primary_isbn10}>
                    <p>{el.title}</p>
                    <img src={el.book_image} alt="book cover"/>
                </li>
                )
            })}
            </ul>
        </div>
    )

}

export default BestSellers;