import React, { Component } from "react";

class Entry extends Component {

  handleSubmit = (e) =>{
    e.preventDefault();
    
    this.props.navigateTo('map');
  }

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

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Login:</label>
          <input type="email" name="email" id="email" size="28" />

          <label htmlFor="password">Password:</label>
          <input type="password" name="password" id="password" size="28" />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Entry;