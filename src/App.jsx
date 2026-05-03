// Import styles
import "./assets/styles/App.css";

// Import components
import NotSetupView from "./views/notsetup"
import SetupView from "./views/setup"

// Import hooks
import { useState } from "react";

function App() {
  // TODO: Add conditional functionality to display whether notifications/external DB access can be granted, if required
  const [isSetup, setIsSetup] = useState(true);

  return isSetup
    ? <SetupView />
    : <NotSetupView onReady={() => setIsReady(true)} />;
}

export default App;
