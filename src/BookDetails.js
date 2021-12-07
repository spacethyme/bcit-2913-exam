import books from './data.js';

function SequelList ({ sequels }) {
    return (
        <>
            <h3>List of Sequels:</h3>
            <ul>
                {Object.keys(sequels)
                    .map((key) => (
                    <li key={key}>{sequels[key]}</li>
                ))}
            </ul>
        </>
    )
}

export default function BookDetails ({ activeBook }) {

    const fallbackImage = "https://via.placeholder.com/300/222222/000000?text=placeholder.com";
    const book = books[activeBook];
    console.log(book);

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
                {book.sequels ?
                    <SequelList sequels={book.sequels} />
                    : ""
                }
            </div>
        </section>
    )
}