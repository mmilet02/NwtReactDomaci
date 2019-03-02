import React, { Component } from "react";
import "./Ocjena.css";

class Ocjena extends Component {
  constructor(props) {
    super(props);
    let ocjene = this.props.prod.recenzije.map(rec => rec.ocjena);

    this.state = {
      ocjene: ocjene
    };
  }

  onStarClick = ocjena => {
    this.setState({ ocjene: [...this.state.ocjene, ocjena] });
  };

  getOcjena = () => {
    const zbroj = this.state.ocjene.reduce(
      (suma, crntValue) => suma + crntValue
    );
    return Math.round(zbroj / this.state.ocjene.length);
  };

  render() {
    return (
      <div className="Rate">
        <p className="ocjena">
          Ukupna ocjena je {this.getOcjena()} na temelju{" "}
          {this.state.ocjene.length} ocjena
        </p>

        <div className="zvijezde">
          <i className="fas fa fa-star" onClick={() => this.onStarClick(5)} />
          <i className="fas fa fa-star" onClick={() => this.onStarClick(4)} />
          <i className="fas fa fa-star" onClick={() => this.onStarClick(3)} />
          <i className="fas fa fa-star" onClick={() => this.onStarClick(2)} />
          <i className="fas fa fa-star" onClick={() => this.onStarClick(1)} />
        </div>
      </div>
    );
  }
}

export default Ocjena;
