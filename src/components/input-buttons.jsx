// src\components\input-buttons.jsx

// Import styles
import '../assets/styles/App.css'

function InputButtons({onInput, disabledInput}) {

    return (
        <section className='user-input'>
            {/* Input buttons for user interaction */}
            <button className='input-btn' value={1} onClick={() => onInput(1)} disabled={disabledInput}>
                <span className="material-symbols-outlined">
                    arrow_upward
                </span>
            </button>
            <button className='input-btn' value={2} onClick={() => onInput(2)} disabled={disabledInput}>
                <span className="material-symbols-outlined">
                    arrow_forward
                </span>
            </button>
            <button className='input-btn' value={3} onClick={() => onInput(3)} disabled={disabledInput}>
                <span className="material-symbols-outlined">
                    arrow_downward
                </span>
            </button>
            <button className='input-btn' value={4} onClick={() => onInput(4)} disabled={disabledInput}>
                <span className="material-symbols-outlined">
                    arrow_back
                </span>
            </button>
        </section>
    );
}

export default InputButtons
