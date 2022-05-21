import React, { useState } from "react";
import { ClientComponent } from "./components/ClientComponent";

import "./App.css";

function App() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <div className="App">
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient((prevState) => !prevState)}>
        {loadClient ? "STOP CLIENT" : "START CLIENT"}
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <ClientComponent /> : null}
    </div>
  );
}

export default App;
