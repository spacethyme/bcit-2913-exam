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
    console.log(book.sequels);

    return (
        <section className="book-details">
            <div className="book-details-img">
                <img src={ book.coverImg ? book.coverImg : fallbackImage } alt="book cover" />
            </div>
            <div className="book-details-info">
                {book.sequels ?
                    <SequelList sequels={book.sequels} />
                    :
                    <p>(no sequels)</p>
                }
            </div>
        </section>
    )
}