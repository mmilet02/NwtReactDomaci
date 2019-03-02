import React from "react";
import { Link } from "react-router-dom";
import "./FavoritiLista.css";
import { connect } from "react-redux";

const FavoritiLista = ({ proizvodi }) => {
  const Proizvod = proizvodi.map(proizvod => (
    <div key={proizvod.id}>
      <Link to={"/Detalji/" + proizvod.id}>{proizvod.naziv}</Link>
      <Link to={"/Detalji/" + proizvod.id}>
        <div className="image-wrapper">
          <img
            src={"http://localhost:3000/images/" + proizvod.image_name}
            alt={proizvod.naziv}
          />
        </div>
      </Link>
    </div>
  ));
  return (
    <div className="sidebar">
      <h3>Favoriti</h3>
      {Proizvod}
    </div>
  );
};

const mapStateToProps = state => ({
  proizvodi: state.favoriti.items
});

export default connect(mapStateToProps)(FavoritiLista);
