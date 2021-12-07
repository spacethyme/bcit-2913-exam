import books from './data.js';

export default function BookList ({ setActiveBook }) {
    return (
        <div>
            <p>--BookList Component--</p>
            <button onClick={() => {setActiveBook(1)}}>
                Set Active Book to 1
            </button>
        </div>
    )
}