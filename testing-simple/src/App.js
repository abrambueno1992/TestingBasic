import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import CreateCard from "./components/CreateCard";
class App extends Component {
  render() {
    return (
      <div>
        {/* // <div className="App"> */}
        {/* <header className="App-header">
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
        </header> */}
        {/* <Search /> */}
        <CreateCard />
      </div>
    );
  }
}

export default App;
