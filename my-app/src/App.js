import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Proizvod from "./components/Proizvod/Proizvod.jsx";
import Detalji from "./components/Detalji/Detalji.jsx";
import FavoritiLista from "./components/FavoritiLista/FavoritiLista.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="main-container">
            <Header />
            <main>
              <div className="sadrzaj">
                <Route exact path="/" component={Proizvod} />
                <Route path="/Detalji/:id" component={Detalji} />
              </div>
              <FavoritiLista />
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
