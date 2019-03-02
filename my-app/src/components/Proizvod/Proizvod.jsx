import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Proizvod.css";
import Fav from "../DodajFavorit/DodajFavorit.jsx";
import Ocjena from "../Ocjena/Ocjena.jsx";

class Proizvod extends Component {
  constructor() {
    super();
    this.state = {
      proizvodi: [],
      search: ""
    };
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount() {
    let proizvodi_p = require("../../proizvodi.json");
    this.setState({
      proizvodi: proizvodi_p
    });
  }

  onChange(event) {
    const { value } = event.target;
    let proizvodi_p = require("../../proizvodi.json");
    let proiz = proizvodi_p.filter(proizvod =>
      proizvod.naziv.toUpperCase().includes(value.toUpperCase())
    );
    this.setState({
      proizvodi: proiz,
      search: value
    });
  }

  render() {
    const { proizvodi } = this.state;
    let proizvodii = proizvodi.map(proizvod => {
      return (
        <div className="product" key={proizvod.id}>
          <div className="content-header">
            <h2>
              <Link className="do" to={"/Detalji/" + proizvod.id}>
                {proizvod.naziv}
              </Link>
              <Fav prod={proizvod} />
            </h2>

            <h3>{proizvod.cijena} kn</h3>
          </div>
          <div className="content-main">
            <div className="image-wrapper">
              <img
                src={"http://localhost:3000/images/" + proizvod.image_name}
                alt={proizvod.naziv}
              />
            </div>
            <div className="text">
              <p className="opis">{proizvod.opis}</p>
            </div>
          </div>
          <div className="content-footer">
            <Ocjena prod={proizvod} />
          </div>
        </div>
      );
    });
    return (
      <div>
        <input
          placeholder="search"
          name="search"
          value={this.state.search}
          onChange={this.onChange}
        />
        <div className="products-wrapper">{proizvodii}</div>
      </div>
    );
  }
}

export default Proizvod;
