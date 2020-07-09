import React, { Component } from "react";
import classes from "./Auth.css";

class Auth extends Component {
  render() {
    return (
      <div className={classes.Auth}>
        <div>
          <h1>Регистрация</h1>
          <div>
            <p>Уже зарегистрирован?</p>
            <a className="App-link" href="#">
              Войти
            </a>
          </div>

          <form>
            <input type="text" placeholder="Адрес электронной почты*" />
            <input type="text" placeholder="имя*" />
            <input type="text" placeholder="фамилия*" />
            <input type="text" placeholder="пароль*" />

            <button type= "submit">Войти</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Auth;
