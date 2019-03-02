import React, { Component } from "react";
import "./DodajFavorit.css";
import { connect } from "react-redux";
import { dodajFav, makniFav } from "../../actions/wishlistAction";

class DodajFavorit extends Component {
  constructor(props) {
    super(props);
    let dodan = this.props.dodani.find(item => item.id === this.props.prod.id)
      ? true
      : false;
    this.state = {
      dodan: dodan
    };
    /*     this.onHeartClick = this.onHeartClick.bind(this);
     */
  }
  onHeartClick = p => {
    this.setState({ dodan: !this.state.dodan });
    if (this.state.dodan) {
      this.props.makniFav(p);
    } else {
      this.props.dodajFav(p);
    }
    console.log(this.props.dodani);
  };

  render() {
    const { prod } = this.props;
    let m = this.state.dodan ? "added" : "";
    return (
      <i
        title="Dodaj u favorite"
        className={"fas fa fa-heart " + m}
        onClick={() => this.onHeartClick(prod)}
      />
    );
  }
}

const mapStateToProps = state => ({
  dodani: state.favoriti.items
});

export default connect(
  mapStateToProps,
  { dodajFav, makniFav }
)(DodajFavorit);
