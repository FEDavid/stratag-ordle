//src\views\setup.jsx

// Import hooks
import { useEffect, useState } from 'react'

// Import styles
import '../assets/styles/App.css'

// Import components
import Header from '../components/ui/header'
import Footer from '../components/ui/footer'
import InputButtons from '../components/input-buttons'
import GuessHistory from '../components/guess-history'
import SettingsModal from '../components/settings-modal'

// Import utils
import { selectStratagem } from "../utils/randomize"

function SetupView() {

    const [permissions, setPermissions] = useState(null)

    const [stratagem, setStratagem] = useState(selectStratagem());
    const [inputCode, setInputCode] = useState(null);

    const [currentGuess, setCurrentGuess] = useState([]);
    const [guessHistory, setGuessHistory] = useState([]);

    // Set gussed to true once correct sequence entered and update state variable
    const [guessed, setGuessed] = useState(false);

    // State variable used for modal
    const [settings, setSettings] = useState(true);

    const handleInput = (value) => {
        // Check if the current guess is less than the input code length before adding a new value
        if (currentGuess.length < inputCode.length) {

            // Add the new value to the current guess
            const updatedGuess = [...currentGuess, value];
            setCurrentGuess(updatedGuess);

            // Check if the current guess is complete (i.e., has the same length as the input code)
            if (updatedGuess.length === inputCode.length) {
                setGuessHistory(prev => [...prev, {
                    number: prev.length + 1,
                    guess: updatedGuess,
                }]);
                if (updatedGuess.join(",") === inputCode.join(",")) {
                    // Store score etc;
                    setGuessed(true);
                    let newscore = guessHistory.length + 1;
                    alert(`Congratulations! You've guessed the stratagem in ${newscore} guesses!`);
                };
                setCurrentGuess([]);
            }
        }
    };

    useEffect(() => {
        if (stratagem) {
            setInputCode(stratagem.inputCode);
        }
    }, [stratagem]);

    return (
        <>
            {/* Modal */}
            <SettingsModal currentlyVisible={settings} hideModal={() => setSettings(false)}  />

            <main className='container'>
                {/* Header */}
                <Header />

                {/* Content */}
                <section className='content-section'>

                    {/* Top section */}
                    <section className='top-section'>
                        {/* TESTING: Testing to select a random stratagem and display it, functionality will be removed, or at least hidden until guesses */}
                        <div>
                            <button onClick={() => setSettings(true)}>Show modal</button>
                            <p>
                                Chosen stratagem: {stratagem ? stratagem.name : "None"}
                            </p>
                            <p>Stratagem code: {inputCode ? inputCode : "None"}</p>
                            <p>Stratagem length: {inputCode ? inputCode.length : "None"}</p>
                            <button onClick={() => setStratagem(selectStratagem())}>
                                Select a stratagem
                            </button>
                        </div>

                        {/* TESTING: Display a number of inputs BASED on the code length */}
                        <div className='input-section'>
                            {
                                inputCode
                                    ? inputCode.map((code, index) => (
                                        <div className='input-btn' key={index}>
                                            {code}
                                        </div>
                                    ))
                                    : "None"}
                        </div>
                    </section>

                    <section className='bottom-section'>
                        <GuessHistory guessHistory={guessHistory} />
                        <p>Current Guess: {currentGuess.join(", ")}</p>
                        {/* User Input */}
                        <InputButtons onInput={handleInput} disabledInput={guessed} />
                    </section>
                </section>

                {/* Footer */}
                <Footer />

            </main>
        </>
    )
}

export default SetupView
