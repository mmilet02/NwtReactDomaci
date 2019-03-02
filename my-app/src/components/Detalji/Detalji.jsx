import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Detalji.css";
// import Ocjena from "../Ocjena/Ocjena.jsx";
import Fav from "../DodajFavorit/DodajFavorit.jsx";

class Detalji extends Component {
  constructor(props) {
    super(props);
    this.state = {
      proizvod: {},
      recenzijee: [],
      rec: []
    };
  }

  componentDidMount() {
    let proizvodi = require("../../proizvodi.json");
    console.log(this.state);
    this.setState({
      proizvod: proizvodi.find(p => p.id === +this.props.match.params.id),
      recenzijee: proizvodi.find(p => p.id === +this.props.match.params.id)
        .recenzije,
      rec: proizvodi.find(p => p.id === +this.props.match.params.id).recenzije
    });
  }

  render() {
    const { proizvod } = this.state;
    console.log(proizvod);
    const { recenzijee } = this.state;
    console.log(recenzijee);
    const { rec } = this.state;
    console.log(rec);
    let Recenzije = recenzijee.map(recenzija => {
      return (
        <div className="recenzija" key={recenzija.recenzija_id}>
          <div className="usr-image-wrapper">
            <img
              src="http://localhost:3000/images/profil.png"
              alt={recenzija.username}
            />
          </div>
          <div className="recenzija-glavni">
            <p className="username">{recenzija.username}</p>
            <p>{recenzija.komentar}</p>
          </div>
        </div>
      );
    });
    return (
      <div className="content">
        <div className="info">
          <div className="content-header">
            <h2>
              <Link to="/">
                <i className="fas fa fa-arrow-left" />
              </Link>
              {proizvod.naziv}
              <Fav prod={proizvod} />
            </h2>
            <h3>{proizvod.cijena} kn</h3>
          </div>
          <div className="main-content">
            <div className="img-glavni">
              <img
                src={"http://localhost:3000/images/" + proizvod.image_name}
                alt={proizvod.naziv}
              />
            </div>
            <p>{proizvod.opis}</p>
          </div>
        </div>
        <div />
        <div className="recenzije-container">
          <h3>Recenzije</h3>

          {Recenzije}
        </div>
      </div>
    );
  }
}

export default Detalji;
