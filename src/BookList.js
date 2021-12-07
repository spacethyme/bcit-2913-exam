import books from './data.js';

export default function BookList ({ setActiveBook }) {
    console.log(books);
    return (
        <section className="book-list">
            {books.map((b, key) => (
                <button onClick={() => {setActiveBook(b.id)}} key={key}>
                    <img src={b.coverImg} />
                    <p>{b.name}</p>
                </button>
            ))}
        </section>
    );
}