//src\components\settings-modal.jsx

// Import styles
import '../assets/styles/App.css'

// Import hooks
import { useEffect, useState } from "react";

function SettingsModal({ currentlyVisible, hideModal }) {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        async function fetchData() {
            const res = await fetch('/api/users');
            const json = await res.json();
            setData(json);
        }

        fetchData();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault(); // stop page reload

        const newUser = await createUser(name);

        // update UI immediately
        setData(prev => [...prev, newUser]);

        setName(""); // clear input
    }

    async function createUser(name) {
        const res = await fetch('/api/users/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });

        if (!res.ok) {
            throw new Error('Failed to create user');
        }

        return await res.json();
    }

    if (!currentlyVisible) return null;

    return (
        <section className="modal-container" onClick={hideModal}>
            <div
                className="modal-background"
                onClick={(e) => e.stopPropagation()}
            >
                <h1>Modal me</h1>
                <button onClick={hideModal}>Close</button>

                <h1>Add user</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter name"
                    />
                    <button type="submit">Add</button>
                </form>

                <h1>User list</h1>
                {data.map(user => (
                    <p key={user.id}>{user.user_name}</p>
                ))}
            </div>
        </section>
    );
}

export default SettingsModal;