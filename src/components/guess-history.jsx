// src\components\guess-history.jsx

// Import styles
import '../assets/styles/App.css'

function GuessHistory({ guessHistory }) {

    return (
        <section className='guess-history'>
            <h2>Guess History</h2>
            {guessHistory.map((entry) => (
                <p key={entry.number}>
                    #{entry.number} - {entry.guess.join(", ")}
                </p>
            ))}
        </section>
    );
}

export default GuessHistory