//src\views\notsetup.jsx

// Import hooks
import { useState } from 'react'

// Import styles
import '../assets/styles/App.css'

function NotSetupView() {
  const [permissions, setPermissions] = useState(null)

  return (
    <main>
        <h1>Not setup</h1>
    </main>
  )
}

export default NotSetupView
