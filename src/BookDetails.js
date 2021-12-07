import books from './data.js';

export default function BookDetails ({ activeBook }) {

    const fallbackImage = "https://via.placeholder.com/300/222222/000000?text=placeholder.com";
    const book = books[activeBook];
    console.log(book);

    return (
        <section className="book-details">
            <div className="book-details-info">
                <img src={ book.coverImg ? book.coverImg : fallbackImage } alt="book cover" />
            </div>
            <div className="book-details-sequels">
                <p>
                    {book.sequels ?
                        JSON.stringify(book.sequels)
                        :
                        "(no sequels)"
                    }
                </p>
            </div>
        </section>
    )
}