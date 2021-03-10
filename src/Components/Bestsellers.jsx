const BestSellers = ({bestsellerslist}) => {

    const {books} = bestsellerslist;
    
    return (
        <div>
            <h1>Best Sellers</h1>
            <ul>{books.map(el => {
                return (
                <li>
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