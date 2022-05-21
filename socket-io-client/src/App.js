import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
import { ENDPOINT } from "./config";

import "./App.css";

function App() {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", (data) => {
      console.log(data);
      setResponse(data);
    });
  }, []);

  return (
    <div className="App">
      <p>
        It's <time dateTime="response">{response}</time>
      </p>
    </div>
  );
}

export default App;
