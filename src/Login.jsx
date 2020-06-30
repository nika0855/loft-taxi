import React, { Component } from "react";
import {Map} from "./Map";

class Login extends Component {
  state = { currentPage: "login" };

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };
  render() {
    return (
      <div>
        <h1>Войти</h1>
        <div>
          <p>Новый пользователь?</p>
          <a className="App-link" href="#">
            Зарегистрируйтесь
          </a>
        </div>

        <form >
          <label htmlFor="email">Login:</label>
          <input type="email" name="email" id="email" size="28" />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" size="28" />

          <button
            onClick={() => {
              this.navigateTo(<Map/>);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
