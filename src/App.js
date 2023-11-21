import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  useEffect(() => {
    socket.on("statusChipUpdate", (status) => {
      console.log("status: ", status);
    });
    socket.emit("chatMessage", { test: true });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
