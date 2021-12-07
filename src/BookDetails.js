import books from './data.js';

export default function BookDetails ({ activeBook }) {

    const fallbackImage = "https://via.placeholder.com/300/222222/000000?text=placeholder.com";
    const book = books[activeBook];

    return (
        <section className="book-details">
            <div className="book-details-img">
                <img src={ book.coverImg ? book.coverImg : fallbackImage } alt="book cover" />
            </div>
            <div className="book-details-info">
                <h3>Author Info:</h3>
                <ul>
                    <li>{book.author}</li>
                    {book.coAuthor ?
                        <li>{book.coAuthor} (co-author)</li>
                        : ""
                    }
                </ul>
                <h3>List of Sequels:</h3>
                <ul>
                    {book.sequels ?
                        Object.keys(book.sequels)
                            .map((key) => (
                            <li key={key}>{book.sequels[key]}</li>
                        ))
                    :
                    <li>(no sequels)</li>
                    }
                </ul>
                <h3 className="rating">Rating: {book.rating}</h3>
            </div>
        </section>
    )
}