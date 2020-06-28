import React, { Component } from "react";
import Login from "./Login"
import {Map} from "./Map";
import Profile from "./Profile";

// import "./App.css";


const PAGES = {
  login: <Login />,
  map: <Map/>,
  profile: <Profile/>
};

class App extends React.Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("login");
                  }}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("map");
                  }}
                >
                  Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.navigateTo("profile");
                  }}
                >
                  Profile
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>{PAGES[this.state.currentPage]}</section>
        </main>
      </div>
    );
  }
}

export default App;
